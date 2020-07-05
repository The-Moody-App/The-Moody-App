import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <span>full name : </span> <br></br>
          <span>user name : </span>
          <br></br>
          <span>email : </span>
          <br></br>
          <span>password : </span>
          <br></br>
          <br></br>
          <br></br>
          <button>edit my profile</button>
          <br></br>
          <br></br>
        </div>
        <h3> My Fav</h3>
        <ul className="fav">
          <li> song 1 </li>
          <li>song 2</li>
          <li>song 3</li>
          <li>song 4</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
