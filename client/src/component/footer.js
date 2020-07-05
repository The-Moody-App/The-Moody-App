import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/aboutus">
          <li>about us</li>
        </Link>
        <Link to="/contactus">
          <li>contact us</li>
        </Link>
      </footer>
    );
  }
}

export default Footer;
