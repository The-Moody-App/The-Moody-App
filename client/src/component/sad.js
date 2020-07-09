import React, { Component } from "react";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useParams
} from "react-router-dom";

class Sad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs:[]
    }   
  } 

  componentDidMount () {
    var x = this;
    axios.get('http://localhost:5000/sad')
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
                     <audio controls src={d.url} >
                     </audio>
                    <button> Add favorite </button>
                     </ul> )})}
                  </div>
                  <div>
                  <Link to="/profile"> <button >Home </button> </Link>
                  </div>
                 </div>
          // <div>
      //   <label>
      //     <pre> Song name singer</pre>
      //   </label>

      //   <audio
      //     controls
      //     src="https://mp3.panet.co.il/media/om-kalthum/Panet.co.il_Om-Kolthom-Akhdan-Alal-part2.mp3"
      //   >
      //     Your browser does not support the
      //     <code>audio</code> element.
      //   </audio>
      // </div>
    );
  }
}

export default Sad;