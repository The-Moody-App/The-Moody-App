import React, { useState , useEffect } from "react";
import { storage } from "./firebaseConfig";
import logo from "../download.png";
import axios from 'axios'

export default function Uploader() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        setError("Please select an image to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

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
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };
useEffect(( ) =>{
  axios.post('http://localhost:5000/image',url)
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
      <div style={{ height: "25px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div>
      {url ? (
        <img style={{ height: "25%" ,width:"25%"}}  src={url} alt="logo" />
      ) : (
        <img src={logo} className="App-logo" alt="logo" />
      )}
    </div>
  );
}