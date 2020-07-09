import React, { useState , useEffect} from "react";
import { storage } from "./firebaseConfig";
import logo from "../logo.svg";
import axios from 'axios'
export default function AudioUploader() {
  const [audio, setAudio] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validAudioTypes = ["audio/ogg", "audio/mpeg", "audio/mp3"];
      if (validAudioTypes.includes(fileType)) {
        setError("");
        setAudio(file);
      } else {
        setError("Please select an Audio to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (audio) {
      const uploadTask = storage.ref(`audios/${audio.name}`).put(audio);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          setError(error);
        },
        () => {
          storage
            .ref("audios")
            .child(audio.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an audio to upload");
    }
  }
  
  useEffect(( ) =>{
    axios.post('http://localhost:5000/audio',url)
          .then(function (response) {
            console.log(response);
          })
          .catch(err =>{
            console.log(err)
          })
  })
  
  return (
    <div>
      <div>
        <input type="file" onChange={handChange} />{" "}
        <button onClick={handleUpdate}> Upload</button>
      </div>
      <div style={{ height: "100px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div>
      {url ? (
        <audio controls src={url}  >
        </audio>
      ) : (
     <p> Upload File Here </p> 
      )}
    </div>
  );
}