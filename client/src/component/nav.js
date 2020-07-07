import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <h3>Moody</h3>
        </Link>
        <ul className="nav-bar">
        <li>
          <Link to="/login">logIn</Link>
          </li>
          <li>
          <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
