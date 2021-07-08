const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const mailRoute = require('./routes/mail');
const passport = require('passport');
const bodyParser = require('body-parser');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo')
const cors = require('cors');
let session = require('cookie-session');

let limiter = new RateLimit({
    store: new MongoStore({
      uri: process.env.MONGO_URI,
      user: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      // should match windowMs
      expireTimeMs: 15 * 60 * 1000,
      errorHandler: console.error.bind(null, 'rate-limit-mongo')
      // see Configuration section for more options and details
    }),
    max: 100,
    // should match expireTimeMs
    windowMs: 15 * 60 * 1000
});

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true} ,() => {
    console.log('Mongodb is connected')
});
require('./config/passport')(passport);
//Apply to all requests
app.use(limiter);
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