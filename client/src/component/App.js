import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Nav from "./nav";
import Body from "./home.js";
import ContactUS from "./contactus.js"
import Profile from "./profile.js";
import Footer from "./footer.js";
import Mood from "./mood.js";
import AboutUs from "./aboutus.js"
import Signup from "./signup.js";
import Login from "./login.js";
import Logout from "./logOut.js";

import Happy from "./happy.js";
import Sad from "./sad.js";
import Romantic from "./romantic.js";
import Tarab from "./tarab.js";
import Rendoms from "./rendoms.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Body} />
          <Route path="/login" component={Login} />
          <Route path="/logOut" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Footer />
           <Route path="/contactus" component={ContactUS} /> 
          <Route path="/aboutus" component={AboutUs} />
          <Route path='/happy' component={Happy}/>
          <Route path='/sad' component={Sad}/>
          {/* <Route path='/myFavorite' component={Favorite}/> */}
          <Route path='/romantic' component={Romantic}/>
          <Route path='/rendoms' component={Rendoms}/>

         

          <Route path="/mood" component={Mood} />
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
        </div>
      </Router>
    );
  }
}
console.log(ContactUS)
export default App;