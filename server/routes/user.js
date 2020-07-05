const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const uri = "mongodb+srv://Sara-Agha-Alnimer:TMGUY54ZkKH7vne6@moody.96orc.mongodb.net/moody?retryWrites=true&w=majority"
// mongoose.connect(uri /* || "mongodb://localhost/moody "*/,
//   { useNewUrlParser: true,
//   useUnifiedTopology: true }
// );

// const db = mongoose.connection;

const User = require('../models/user')
// const validateInput = require("../../validation/register")

router.post('/signup', (req,res) => {  
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      
      // // Hash password before saving in database
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(req.body.email, salt, (err, hash) => {
      //     if (err) throw err;

          
      //   });
      // });

      //add new user to the db
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });     
});

//login route
router.post("/login",function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email, password }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    console.log(user)
   
    
      console.log(user);
      return res.json({exist : true})
  
    
  });
});

//require songs model 
// const sad = require('../models/songs');

// router.get("/sad",function(req, res) {
//   sad.find({},(err,songs) => { 
//     if (err) {
//       console.log(err)
      
//     }
//     console.log(songs)
//     return res.json(songs)
//   });
//   console.log("hello")
//   // res.json("hello")
// });



module.exports = router;