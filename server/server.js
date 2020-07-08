const express = require("express");
const bodyParser = require("body-parser");
const handlers=require('./handlers.js')
const app = express();
const router = express.Router();

var cors = require('cors')
const mongoose = require("mongoose")
var session = require("express-session");
var cookieParser = require("cookie-parser");
const path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser("MoodyApp"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(
  session({
    name: "session-id",
    secret: "SuraSession",
  
  })
);





app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


app.post('/signup',handlers.signup)

//login route
app.post("/login",handlers.login)

//logout route
app.get("/logout",handlers.logout);
//handling moods
app.get("/sad",handlers.sad);
app.get("/happy",handlers.happy);
app.get("/tarab",handlers.tarab);
app.get("/romantic",handlers.romantic);
app.get("/wedding",handlers.wedding);
app.get("/random",handlers.random);
app.post("/sendEmail",handlers.sendEmail)

var port = 5000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});


