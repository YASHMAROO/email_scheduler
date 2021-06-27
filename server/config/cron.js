let cron = require('node-cron');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const SentMail = require('../model/SentMail');

function recurring(newMail) {
    cron.schedule('20 * * * * *', () => {
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
        sendMail(newMail).then(result=> {
            console.log(result)
            let sentMail = new SentMail();
            let currentDate = new Date(Date.now());
            sentMail = {
                to: newMail.to,
                subject: newMail.subject,
                body: newMail.body,
                date: currentDate,
                userId: newMail.userId     
            }
            SentMail.create(sentMail, (err, res) => {
                if(err)
                    console.log("Mail could not be added successfully");
                else 
                    console.log("Sent Mail Added successfully")
            })
        })
        .catch(error=>console.log(error));
    });
}

function weekly(newMail) {
    cron.schedule('30 14 * * tuesday', () => {
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
        sendMail(newMail).then(result=> {
            console.log(result)
            let sentMail = new SentMail();
            let currentDate = new Date(Date.now());
            sentMail = {
                to: newMail.to,
                subject: newMail.subject,
                body: newMail.body,
                date: currentDate,
                userId: newMail.userId     
            }
            SentMail.create(sentMail, (err, res) => {
                if(err)
                    console.log("Mail could not be added successfully");
                else 
                    console.log("Sent Mail Added successfully")
            })
        })
        .catch(error=>console.log(error));
    });
}

function monthly(newMail) {
    cron.schedule('30 14 25 * *', () => {
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
        sendMail(newMail).then(result=> {
            console.log(result)
            let sentMail = new SentMail();
            let currentDate = new Date(Date.now());
            sentMail = {
                to: newMail.to,
                subject: newMail.subject,
                body: newMail.body,
                date: currentDate,
                userId: newMail.userId     
            }
            SentMail.create(sentMail, (err, res) => {
                if(err)
                    console.log("Mail could not be added successfully");
                else 
                    console.log("Sent Mail Added successfully")
            })
        })
        .catch(error=>console.log(error));
    });
}

function yearly(newMail) {
    cron.schedule('30 14 * 5 tuesday', () => {
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
        sendMail(newMail).then(result=> {
            console.log(result)
            let sentMail = new SentMail();
            let currentDate = new Date(Date.now());
            sentMail = {
                to: newMail.to,
                subject: newMail.subject,
                body: newMail.body,
                date: currentDate,
                userId: newMail.userId     
            }
            SentMail.create(sentMail, (err, res) => {
                if(err)
                    console.log("Mail could not be added successfully");
                else 
                    console.log("Sent Mail Added successfully")
            })
        })
        .catch(error=>console.log(error));
    });
}

module.exports = {recurring, weekly, monthly, yearly};