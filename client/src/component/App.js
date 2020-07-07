import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import PrivateRoute from '../privateRoute';
import { AuthContext } from "../auth";


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }


    return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Body} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={Signup} />
          <Footer />
          {/* <Route path="/contactus" component={Contact} /> */}
          <Route path="/aboutus" component={About} />
          <Route path="/commuinty" component={Commuinty} />
          <Route path="/mood" component={Mood} />
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
          <PrivateRoute path="/profile" component={Profile} />
        </div>
      </Router>
      </AuthContext.Provider>
    );
  }

export default App;