import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import login from "./login";
import Signup from "./signup";
import Body from "./home";
import About from "./aboutus";
import Profile from "./profile";
// import Contact from "./contactus";
import Footer from "./footer";
import Commuinty from "./commuinty";
import Mood from "./mood";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Body} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Footer />
          {/* <Route path="/contactus" component={Contact} /> */}
          <Route path="/aboutus" component={About} />
          <Route path="/commuinty" component={Commuinty} />
          <Route path="/mood" component={Mood} />
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
        </div>
      </Router>
    );
  }
}

export default App;