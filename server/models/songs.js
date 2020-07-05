const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
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
  sarcastic: [
    {
    song:String,
    singer:String,
    url:String
  }],
  workout: [
    {
    song:String,
    singer:String,
    url:String
  }]
});

const Song = mongoose.model("Song", songSchema);

module.exports =  Song;




