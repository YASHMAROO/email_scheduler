const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const mailRoute = require('./routes/mail');
const passport = require('passport');
const bodyParser = require('body-parser');
let session = require('cookie-session');
const cors = require('cors');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true} ,() => {
    console.log('Mongodb is connected')
});
require('./config/passport')(passport);
app.use(session({
    maxAge: 30*24*60*60*1000,
    keys: [process.env.COOKIE_KEY]
}))
app.use(passport.initialize());
app.use(passport.session());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use('/', userRoute);
app.use('/', mailRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})