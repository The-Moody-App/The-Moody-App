import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams
  } from "react-router-dom";
// import Logout from "./logOut.js";


  
  import AboutUs from "./aboutus.js"
  import ContactUS from "./contactus"
class NavBarHome extends Component {
    render() {
      return (
        <div>
          <div>
            <nav className="navbar navbar">
              <ul className="nav navbar-nav">
                {/* <li>
                <Link to="/Upload">My Song</Link>
              </li> */}
              <ul className="nav-bar">
          <Link to="/login">
            <li>logIn</li>
          </Link>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          </ul>
              <ul className="nav-bar">
              
              
              </ul>
                <li>
                  <Link to="/contactus">
                    
                    <button> Contact Us</button>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus">
                    
                    <button> About US</button>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <Switch>
          <Route path="/myFavorite" component={Favorite} />
            
            {/* <Route path="/Upload" component={Upload} /> */}
            {/* <Route path="/Logout" component={Logout} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUS} /> */}
            {/* </Switch> */} */
          </div>
        </div>
      );
    }
  }
  export default NavBarHome;