import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from 'axios'
import { Card, Form, Input, Button, Error } from '../component/AuthForm';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
        
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
    
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          errors:this.state.errors
        };

        console.log(newUser)
        axios.post('http://localhost:5000/signup',newUser)
        .then(function (response) {
          console.log(response);

          // if (response.status === 200) {
          //   this.props.handleSuccessfulAuth(response.data);
          // }
          
        })
      }

    render() {
    return (
      <Card>
        <Form>
        <h1>Sign Up</h1>
        
        
          <form onSubmit={this.handleSubmit}>
            <Form>
            <Input type="text"  name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required /> 
            <Input type="text" name="lastName" placeholder="last Name" value={this.state.lastName} onChange={this.handleChange} required /> 

            <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />

            <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
   
            <Input type="password"  name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} required />
         
         <Button type="submit" value="Sign Up">Sign up</Button>        
            </Form>
             </form>
        
        </Form>
      </Card>
    );
  }
}

export default Signup;
