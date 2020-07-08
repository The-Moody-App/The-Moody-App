import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from 'react-router-dom';
import {Button,Form,Title} from "./AuthForm"
import "./style.css";
class Nav extends Component {
  render() {
    return (
      <nav>
      

        <Link to="/">
          <Title>Moody</Title> 
        </Link>
        <ul className="nav-bar">
        <div id="my_logo">
          <Link to="/login">
          <Button to="/login">logIn</Button>
          </Link>
          <Link to="/signup">
            <Button>signup</Button>
          </Link>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
            </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
