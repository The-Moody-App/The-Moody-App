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
          <Link to="/login">
            <li>logIn</li>
          </Link>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          
        </ul>
      </nav>
    );
  }
}

export default Nav;
