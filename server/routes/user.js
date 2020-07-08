const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const  saltRounds =  10;
// const fileUpload = require('express-fileupload');
// const multer = require('multer');
// const ejs = require('ejs');
// const path = require('path');
// const User = require('../models/user')
import  {User} from '.../data'

// const User2 = require('../models/user2')
// router.post('/addData',function (req, res)  {
//   var newUser = new User2({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     uploads:req.body.uploads,
//     favorite:req.body.favorite,
//     image:req.body.image,
//   })
//  newUser.save()
//     .then(()=> res.json("ADV Added"))
//       .catch(err=> res.status(400).json('Error:'+err))

// })



router.post('/signup',function (req, res)  {
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
})

//login route
router.post("/login",function (req, res)  {
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
})

//logout route
router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.status(200).send("logout");
});
module.exports = router;