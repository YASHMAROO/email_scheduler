const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sentmailSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('sentmail', sentmailSchema);