const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/User');

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    },
        async function(accessToken, refreshToken, profile, done) {
            try {
                let user = await User.findOne({googleId: profile.id});
                if(user) {
                   
                    done(null, user);
                } else {
                    const newUser = {
                        googleId: profile.id,
                        name: profile.displayName,
                        photo: profile.photos[0].value,
                        email: profile.emails[0].value,
                    };
                    user= await User.create(newUser);
                    done(null, user);
                }
            } catch (err) {
                console.error(err);
            }
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}