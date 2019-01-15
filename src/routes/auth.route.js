const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/login', (req, res, next) => {
//     res.send(req.flash('error'))
// })
router.post('/login', passport.authenticate('local'),  (req, res) => {
    res.json({message: "Your Login Now"})
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send({message: "Logout!"})
});

module.exports = router;
