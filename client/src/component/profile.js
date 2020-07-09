import React, { Component } from "react";
import NavBar from "./navBar.js";
import Sad from "./sad.js";
import Mood from "./mood.js";
import Uploader from "./uploader"
import AudioUploader from "./audioUploader"
class Profile extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Sad/>
      <Uploader />
      <AudioUploader />
      <Mood/>
      </div>
    
    );
  }
}

export default Profile;
