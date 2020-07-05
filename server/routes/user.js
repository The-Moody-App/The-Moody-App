const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const handlers= require('./handlers.js')



//signup route

router.post('/signup', handlers.signup)
//login route
router.post("/login",handlers.login)
module.exports = router;