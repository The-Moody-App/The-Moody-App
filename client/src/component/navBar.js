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
import Logout from "./logOut.js";
  
  import AboutUs from "./aboutus.js"
  import ContactUS from "./contactus"
class NavBar extends Component {
    render() {
      return (
        <div>
          <div>
            <nav className="navbar navbar">
              <ul className="nav navbar-nav">
                {/* <li>
                <Link to="/Upload">My Song</Link>
              </li> */}
                <li>
                  <Link to="/profile">
                    
                    <button>My Favorite</button>
                  </Link>
                </li>
                <li>
                  <Link to="/Logout">
                    
                    <button> Logout</button>
                  </Link>
                </li>
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
  export default NavBar;