const express = require("express");
const request = require('request')
const querystring = require('querystring')
var cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();

//make connection between server side and client side
app.use(cors());

//routs path
const users = require("./routes/user");
const songs = require("./routes/main");
const { Mongoose } = require("mongoose");

// Connect to MongoDB
const uri = "mongodb+srv://Sara-Agha-Alnimer:TMGUY54ZkKH7vne6@moody.96orc.mongodb.net/moody?retryWrites=true&w=majority"
mongoose.connect(uri /* || "mongodb://localhost/moody "*/,
    { useNewUrlParser: true,
    useUnifiedTopology: true }
  )
  mongoose.connection.on('connected', () => 
  console.log("MongoDB successfully connected"))


// middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//use routs for the site
app.use("",users);


var redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:5000/callback'

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})



var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});


