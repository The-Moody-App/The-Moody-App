import React, { Component } from "react";
import axios from 'axios'
import queryString from "query-string"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useParams
} from "react-router-dom";
class Romantic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs:[]
    }   
  } 

  componentDidMount () {
    var x = this;
    axios.get('http://localhost:5000/romantic')
    .then((res) => {
      this.setState({songs:res.data})
        console.log(res.data)
          // the response is an array of songs 
        }).catch((error) => {
          console.log(error)
      });
  }

  render() {
    const data=this.state.songs;
    console.log(data)
    return (
<div>
          <div>
                {data.map(function(d, idx){
                   return (
                     <ul key={d._id}>
                     <h1>{d.song}</h1>
                     <h1>{d.singer}</h1>
                     <p>{d.url}</p>
                    <button> Add favorite </button>
                     </ul> )})}
                  </div>
                  <div>
                  <Link to="/profile"> <button >Home </button> </Link>
                  </div>
                 </div>
        
    );
  }
}

export default Romantic;