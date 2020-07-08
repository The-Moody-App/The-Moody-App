const express = require('express');
var nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const  saltRounds =  10;
var items = require('../data-mongodb')
var songs=items.Song
var User=items.User
module.exports = {
signup:function (req, res)  {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
   User.findOne({ email: newUser.email })
    .then( profile => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, function (err, hash)  {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
             newUser
              .save()
              .then(() => {

                res.send('User authenticated');

              })
              .catch(err => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");

      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
},
login:function (req, res)  {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

   User.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          function (err, result) {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              req.session.user = profile;

              res.cookie("user", "user", {
                signed: true,
                maxAge: 1000 * 60 * 60,
              });
              var userInfo = {
                user: profile,
                result: result,
              };
              res.status(200).send("User log in");
              
            } else {
              res.send("User Unauthorized Access");
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
},
logout: function(req, res) {
  req.session.destroy();
  return res.status(200).send("logout");
},
sad:function(req, res) {
  songs.find({},'sad',function(err,songs)  { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
 happy:function(req, res) {
  songs.find({},'happy',function(err,songs) { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
tarab:function(req, res) {
  songs.find({},'tarab',function(err,songs) { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
romantic:function(req, res) {
  songs.find({},'romantic', function(err,songs){ 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
wedding:function(req, res) {
  songs.find({},'wedding',function (err,songs) { 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
random:function(req, res) {
  songs.find({},'random',function(err,songs){ 
    if (err) {
      console.log(err)
    }
    console.log(songs)
    return res.end(songs)
  });
},
sendEmail:function(req, res)  {
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
  }
}
