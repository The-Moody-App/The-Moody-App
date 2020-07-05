var mongoose=require('mongoose')
mongoose.Promise = global.Promise;
// import encrypt lib
var bcrypt = require("bcrypt");
var saltRounds = 10;

//import models
var songs = require('../server/models.songs.js').Song;
var user = require('../server/models.user.js').User;

module.exports = {
	signup: function (req, res)  {
  var newUser = new Autho({
    email: req.body.email,
    password: req.body.password
  });
   user.findOne({ email: newUser.email })
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
                  console.log('user created')
                res.send('new user created');
              })
              .catch(err => {
                res.send("Error is ", err.message);
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
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;
   user.findOne({ email: newUser.email })
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
              res.send("User authenticated");
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
sad:function(req, res) {
    songs.find({},'sad',(err,songs) => { 
      if (err) {
        console.log(err)
        
      }
      console.log(songs)
      return res.json(songs)
    });
    console.log("hello")
  },
}