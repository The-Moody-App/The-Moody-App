const express = require("express");
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
app.use("",songs)


var port = 5000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});


