const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const handlers = require('./handlers');

router.get("/sad",handlers.sad)



module.exports = router;