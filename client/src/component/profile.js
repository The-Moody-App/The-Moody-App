import React, { Component } from "react";
import { Button,Form,Card,Title } from "./AuthForm";
import { useAuth } from "../auth";

function Profile(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
    return (
      <Card>
        <Form>
          <span>full name : </span> <br></br>
          <span>user name : </span>
          <br></br>
          <span>email : </span>
          <br></br>
          <span>password : </span>
          <br></br>
          <br></br>
          <br></br>
          <Button>edit my profile</Button>
          <br></br>
          <br></br>
        </Form>
        <h3> My Fav</h3>
        <ul className="fav">
          <li> song 1 </li>
          <li>song 2</li>
          <li>song 3</li>
          <li>song 4</li>
        </ul>
        <Button onClick={logOut}>Log out</Button>
     </Card>
    );
  }


export default Profile;
