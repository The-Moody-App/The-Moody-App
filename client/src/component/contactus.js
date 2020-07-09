import React, { Component } from "react";
import axios from "axios"

class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            text: "",
         
        }
        this.updateemail= this.updateemail.bind(this);
        this.updatetext= this.updatetext.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    updateemail(evt) {
        this.setState({
          email : evt.target.value
        });
      }
      updatetext(evt) {
        this.setState({
         text : evt.target.value
        });
      }


    
      handleSubmit =  e => {
          e.preventDefault();
      
          const Send = {
            email: this.state.email,
            text: this.state.text,
          };
          console.log(Send)
          axios.post('http://localhost:5000/sendEmail',Send)
          .then(function (response) {
            console.log(response);
       if(response.data === "Email send"){

              window.location = "/profile"
            }else{
              alert(' TRY AGAIN!!!')}
          })
           }
      
  render() {
    return (

<form onSubmit={this.handleSubmit}>

        <div className="FormField" >
        <label className="Form1" htmlFor="name">E-Mail Address :</label>
        <input type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.updateemail} />
      </div>
      <div className="FormField" >
        <label className="Form1" htmlFor="name">Send Me </label>
        <input type="text" id="text" className="Input1" placeholder="Enter Text" name="text" value={this.state.text} onChange={this.updatetext} />
       </div>
       <input type="submit" value="Send" />
       </form>


    
    );
  }
}

export default ContactUS;