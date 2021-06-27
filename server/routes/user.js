const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email']})
);

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.status(200).send({message: 'Successful Login'});
});

router.get('/current_user', (req,res)=> {
  req.isAuthenticated()?res.send({user: req.user}):res.status(403).send({message: 'Please Login to see details'});
});

router.get('/logout', (req,res)=> {
  req.logout();
  res.status(200).send({message: 'Successfully logged out'});
})

module.exports = router;