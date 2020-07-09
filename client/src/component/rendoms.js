import React, { Component } from "react";
import axios from "axios";

class Rendoms extends Component {
    constructor() {
      super();
      this.state = {
        songs:[]

      };
    }
    componentDidMount() {
      var x = this;
      axios.get("http://localhost:5000/random")
        .then((res) => {
          x.setState({ Moods: res.data });
          console.log(res.data+ 'here we go ');
        })
        .catch((error) => {
          console.log(error + 'this is');
        });
    }
    render() {
      const data = this.state.songs;
      console.log(this );
      return (
        <div>
          {data.map(function (d, idx) {
            return (
              <ul key={d._id}>
                <h1>{d.song}</h1>
                <h1>{d.singer}</h1>
                <audio controls src={d.url} >
                     </audio>
                <button>Add favorite </button>
              </ul>
            );
          })}
        </div>
      );
    }
  }
  export default Rendoms;