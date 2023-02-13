const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');


// Login

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register page

router.get('register', forwardAuthenticated, (req, res) => res.render('register'));

// Register user

router.post('register', (req, res) => {
    const {userName, email, password, password2 } = req.body;
    let errors = [];

    if (!userName || !email || !password || !password2) {
        errors.push({message: 'please enter all fields'});
    }

    if (password != password2) {
        errors.push({message: 'Passwords do not match'});
    }

    if (password.length < 6) {
        errors.push({message: 'Password must be 6 or more characters'});
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            userName,
            email,
            password,
            password2
        });
    } else {
        User.findOne({email: email}).then(user => {
            if (user) {
                errors.push({message: 'Email already registered'});
                res.render('register', {
                    errors,
                    userName,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = User.create({userName: userName, email: email, password: password})
                .then(user => res.redirect('user/login'))
                .catch(err => console.log(err));
            }
        });
    }
});

// Login

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: 'user/login',
        failureFlash: true
    })(req, res, next);
});

// Logout

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('user/login');
});

module.exports = router;