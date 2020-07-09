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
        
      </nav>
    );
  }
}

export default Nav;
