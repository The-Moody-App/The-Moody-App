import React, { Component } from "react";
import { Link } from "react-router-dom";
import Uploader  from './uploader';
import NavBarHome from "./navbarhome.js";
import Sad from "./sad.js";
import Login from "./login.js";
import Signup from "./signup.js";
import Mood from "./mood.js";
class Body extends Component {
  constructor() {
    super();
    this.state = {
      moods: [
        "dark nights",
        "feeling alive",
        "feeling calm",
        "first real date",
        "sarcastic ",
        "Tarab mood",
      ],
    };
  }

  render() {
    return (
      <div>
      <NavBarHome/>
     
      <Sad/>
      <Mood/>
      </div>
    );
  }
}

export default Body;
