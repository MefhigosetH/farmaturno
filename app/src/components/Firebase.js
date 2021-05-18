import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "farmaturno-b9c21.firebaseapp.com",
  databaseURL: "https://farmaturno-b9c21.firebaseio.com",
  projectId: "farmaturno-b9c21",
  storageBucket: "farmaturno-b9c21.appspot.com",
  messagingSenderId: "188182078720",
  appId: "1:188182078720:web:15369ac47ef01967f9bfe5"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

