import React, { Component } from "react";
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
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
          // window.location = "/home"
        })
        
    
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required  />
            <br />

            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
            <br />

            <input type="submit" value="Log In" />
          </form>
      </div>
    );
  }
}

export default Login;
