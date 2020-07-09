import React, { Component } from "react";
import NavBar from "./navBar.js";
import Sad from "./sad.js";
import Mood from "./mood.js";

class Profile extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Sad/>
      <Mood/>
      </div>
    
    );
  }
}

export default Profile;
