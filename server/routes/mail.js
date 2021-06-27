const express = require('express');
const Mail = require('../model/Mail');
const SentMail = require('../model/SentMail');
const router = express.Router();
const cronSchedule = require('../config/cron');


//Mailer logic using nodemailer

//get all future mails
router.get('/mails/:id', (req, res) => {
    // if(req.isAuthenticated()) {
    Mail.find({userId: req.params.id}).then(mails => {
        if(mails) {
            res.status(200).send({mails: mails, success: true});
        } else {
            res.status(200).send({message: 'No data found', success: false});
        }
    });
    // } else {
    //     res.status(400).send({message: 'Please login to access this page'});
    // }
});

//get all history mails
router.get('/sent_mails/:id', (req, res) => {
    // if(req.isAuthenticated()) {
    SentMail.find({userId: req.params.id}).then(sentMails => {
        if(sentMails) {
            res.status(200).send({mails: sentMails});
        } else {
            res.status(200).send({message: 'No mails sent yet'});
        }
    });
    // } else {
    //     res.status(400).send({message: 'Please login to access this page'});
    // }
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
    Mail.create(newMail, (err,newMail) => {
        if(err) {
            res.status(400).send({message: "Couldn't add the mail"});
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
            res.status(200).send({message: "Mail added successfully", mail: newMail});
        }
    })
})

module.exports = router;