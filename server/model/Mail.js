const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mailSchema = new Schema({
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
    scheduleSelected: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('mail', mailSchema);