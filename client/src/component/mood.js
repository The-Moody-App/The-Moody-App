import React, { Component } from "react";
import axios from 'axios'


class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs:[]
    }   
  } 

  componentDidMount () {
    // axios.get('http://localhost:5000/sad')
    //     .then(function (response) {
    //       // the response is an array of songs
    //       this.setState({
    //         songs:response
    //       })  
    //     })
  }

  render() {
    return (
      <div>
        <label>
          <pre>Song name singer</pre>
        </label>

        <audio
          controls
          src="https://mp3.panet.co.il/media/om-kalthum/Panet.co.il_Om-Kolthom-Akhdan-Alal-part2.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default Mood;
