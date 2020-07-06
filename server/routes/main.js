const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// require songs model 
const songs = require('../models/songs');

router.get("/sad",function(req, res) {
  songs.find({},'sad',(err,songs) => { 
    if (err) {
      console.log(err)
      
    }
    console.log(songs)
    return res.json(songs)
  });

});



module.exports = router;