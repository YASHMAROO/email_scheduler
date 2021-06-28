const express = require('express');
const Mail = require('../model/Mail');
const SentMail = require('../model/SentMail');
const router = express.Router();
const cronSchedule = require('../config/cron');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const validator = require('validator');
const Verifier = require("email-verifier");


//Mailer logic using nodemailer

//get all future mails
router.get('/mails/:id', (req, res) => {
    if(req.isAuthenticated()) {
        Mail.find({userId: req.params.id}).then(mails => {
            if(mails) {
                res.status(200).send({mails: mails});
            } else {
                res.status(200).send({message: 'No data found'});
            }
        });
    } else {
        res.status(400).send({message: 'Please login to access this page'});
    }
});

//get all history mails
router.get('/sent_mails/:id', (req, res) => {
    SentMail.find({userId: req.params.id}).then(sentMails => {
        if(sentMails) {
            res.status(200).send({mails: sentMails});
        } else {
            res.status(200).send({message: 'No data found'});
        }
    });
});

//post route for storing mail
router.post('/create_mail/:id' , (req,res) => {
    let newMail = new Mail();
    newMail = {
        userId: req.params.id,
        to: req.body.to,
        subject: req.body.subject,
        scheduleSelected: req.body.scheduleSelected,
        body: req.body.description
    };
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET, // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );
    oauth2Client.setCredentials({
        refresh_token: process.env.MAILING_SERVICE_REFRESH_TOKEN,
    });
    
    async function sendMail(mail) {
        try {
            const accessToken = await oauth2Client.getAccessToken();
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.SENDER_EMAIL_ADDRESS,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            const mailoptions = {
                from: process.env.SENDER_EMAIL_ADDRESS,
                to: mail.to,
                subject: mail.subject,
                html: mail.body,
            };
    
            const result = await transport.sendMail(mailoptions);
            return result;
        } catch (error) {
            return error;
        }
    };
    if(validator.isEmail(newMail.to)) {
        let verifier = new Verifier(process.env.EMAIL_VERIFIER_API_KEY,{
            checkCatchAll: false,
            checkDisposable: false,
            checkFree: false,
            validateDNS: false,
            validateSMTP: false
        });
        verifier.verify(newMail.to, (err, data) => {
            if (err) {
                res.send({message: err})
            } else {
                if(data.catchAllCheck===null || data.disposableCheck===null || data.smtpcheck===false) {
                    res.status(200).send({message: "Check the validity of the mail which you have enetered"})
                } else {
                    if(newMail.googleId==='0' || newMail.subject==='' || newMail.description==='' || newMail.scheduleSelected==='') {
                        res.status(200).send({message: "Please fill in all the fields in the form to send a mail"});
                    } else {
                        sendMail(newMail).then(result=> {
                            console.log(result)
                        }).catch(error=>console.log(error));
                        Mail.create(newMail, (err,newMail) => {
                            if(err) {
                                res.status(400).send({message: "Couldn't schedule the the mail"});
                            } else {
                                if(newMail.scheduleSelected === "recurring") {
                                    cronSchedule.recurring(newMail);                 
                                } else if(newMail.scheduleSelected === "weekly") {
                                    cronSchedule.weekly(newMail);                 
                                } else if(newMail.scheduleSelected === "yearly") {
                                    cronSchedule.yearly(newMail);                 
                                } else if(newMail.scheduleSelected === "monthly") {
                                    cronSchedule.monthly(newMail);
                                }
                                res.status(200).send({message: "Mail sent and scheduled successfully", mail: newMail});
                            }
                        })        
                    }
                }
            }
        });
    } else {
        res.send({message: 'Enter a valid mail'})
    }
})

module.exports = router;