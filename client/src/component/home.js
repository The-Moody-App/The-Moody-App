import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Sad from './subs/sad';
class Body extends Component {
  constructor() {
    super();
    this.state = {
      moods: [
        "dark nights",
        "feeling alive",
        "feeling calm",
        "first real date",
        "sarcastic ",
        "Tarab mood",
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* this the header containing the logo and nav bar  */}
        <p id="welcoming">How do you feel ?</p>
        {/* i used map to iterate over the elements to put each element in a button and li */}
        {this.state.moods.forEach((element) => {})}
        {/* <ul>
        
          {this.state.moods.map((mood) => (
            <li key={mood} className="moods">
              <button id="mood" onClick={this.handel}>
                {mood}
              </button>
            </li>
          ))}
        </ul> */}
        <button className="mood">
          <Link to="/mood">dark nights</Link>
        </button>
        <button className="mood">
          <Link to="/mood">feeling alive</Link>
        </button>
        <button className="mood">
          <Link to="/mood">feeling calm</Link>
        </button>
        <br></br> <br></br>
        <button className="mood">
          <Link to="/mood">first date</Link>
        </button>
        <button className="mood">
          <Link to="/mood">Tarab Mood</Link>
        </button>
        <button className="mood">
          <Link to="/mood">Friends drive</Link>
        </button>
        <br></br> <br></br>
        <button id="cm">
          <Link to="/commuinty">communty moods</Link>
        </button>
      </React.Fragment>
    );
  }
}

export default Body;
