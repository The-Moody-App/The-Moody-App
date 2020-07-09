var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MoodyDB');
var db = mongoose.connection;

var Schema= mongoose.Schema;
// connect data base and check the connection
var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
// create autho schema contain informations of users
const songSchema = new Schema({
    sad: [
      {
      song:String,
      singer:String,
      url:String
     }],
     happy: [
       {
       song:String,
       singer:String,
       url:String
      }],
      romantic: [
       {
       song:String,
       singer:String,
       url:String
     }],
     tarab: [
       {
       song:String,
       singer:String,
       url:String
     }],
     wedding: [
       {
       song:String,
       singer:String,
       url:String
     }],
     random: [
       {
       song:String,
       singer:String,
       url:String
     }]
   });

   const UserSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    uploads:{
      type: [String] 
    },
    favorite:{
      type: [String] 
    },
    image:String
  });
  
  const Song = mongoose.model('Song', songSchema);
  const User = mongoose.model('User', UserSchema);



  module.exports.Song  = Song;
  module.exports.User  = User;


