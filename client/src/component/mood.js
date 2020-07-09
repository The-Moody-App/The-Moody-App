import React, { Component } from "react";
// import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams
  } from "react-router-dom";
class Mood extends Component {
    render() {
      return (
        <div>
          <Link to="/sad">

            <button className="mood">sad</button>
          </Link>
  
          <Link to="/wedding">
     
            <button className="mood">wedding</button>
          </Link>
  
          <Link to="/tarab">
           
            <button className="mood">tarab</button>
          </Link>
  
          <Link to="/Romantic">
      
            <button className="mood">Romantic</button>
          </Link>
          <Link to="/happy">
         
            <button>Happy</button>
          </Link>
        </div>
      );
    }
  }
  export default Mood;