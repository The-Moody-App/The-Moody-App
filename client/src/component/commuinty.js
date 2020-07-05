import React, { Component } from "react";
// import AudioPlayer from "react-h5-audio-player";
class Commuinty extends Component {
  // Player = () => (
  //   <AudioPlayer
  //     autoPlay
  //     src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  //     onPlay={(e) => console.log("onPlay")}
  //     // other props here
  //   />
  // );
  render() {
    return (
      <div>
        <p>Do you have Hanan's Mood ?</p>
        <input type="file" accept="audio/*" />
      </div>
    );
  }
}

export default Commuinty;
