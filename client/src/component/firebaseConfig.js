import firebase from "firebase";
import "firebase/storage";

// My web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBw6QoW87kAPWAXF1yi_0t3lynQj_3HqCg",
    authDomain: "moodywebsite-90fb4.firebaseapp.com",
    databaseURL: "https://moodywebsite-90fb4.firebaseio.com",
    projectId: "moodywebsite-90fb4",
    storageBucket: "moodywebsite-90fb4.appspot.com",
    messagingSenderId: "364816688582",
    appId: "1:364816688582:web:0f8bcd67d1409b76f3bec7",
    measurementId: "G-DHDNK8RZR9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  


const storage = firebase.storage();

export { storage, firebase as default };