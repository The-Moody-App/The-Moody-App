const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var nodemailer = require("nodemailer");
// require songs model 
const songs = require('../models/songs');
router.get("/sad",function(req, res) {
  songs.find({},'sad',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.get("/happy",function(req, res) {
  songs.find({},'happy',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.get("/tarab",function(req, res) {
  songs.find({},'tarab',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.get("/romantic",function(req, res) {
  songs.find({},'romantic',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.get("/wedding",function(req, res) {
  songs.find({},'wedding',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.get("/random",function(req, res) {
  songs.find({},'random',(err,songs) => { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
});
router.post("/sendEmail",(req, res) => {
  var email=req.body.email
  var text=req.body.text
  // Step 1
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: "bookteacheronline@gmail.com",
          pass: "BookTeacherOnline123456789"
      }
  });
  // Step 2
  let mailOptions = {
      from: email ,
      to: 'moodyweb19@gmail.com',
      subject: 'There is user want to contact you  !!',
      text: text
  };
  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          res.status(400).end('Error:'+err)
      }
      res.end("Email send");
  });
  })
module.exports = router;