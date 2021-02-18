const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();

const { 
    signup, 
    signin, 
    signout,
    requireSignin
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

router.post('/signup', userSignupValidator, validationResult, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;