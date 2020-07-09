/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useParams
} from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.updateemail= this.updateemail.bind(this);
        this.updatePassword= this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    updateemail(evt) {
      this.setState({
        email : evt.target.value
      });
    }
    updatePassword(evt) {
      this.setState({
          password : evt.target.value
        });
      }

    handleSubmit =  e => {
        e.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.password,   
        };

        console.log(user)
        axios.post('http://localhost:5000/login',user)
        .then(function (response) {
          console.log(response);
     if(response.data === "User log in"){
            window.location = "/profile"
          }else{
            alert(' TRY AGAIN!!!')}
        })
         }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <label >E-Mail Address :</label>
            <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.updateemail} required  />
            <br />
            <label>Password: </label>
            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword} required/>
            <br />

            <input type="submit" value="Log In" />
          </form>
      </div>
    );
  }
}

export default Login;