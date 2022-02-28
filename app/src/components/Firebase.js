import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "farmaturno-b9c21.firebaseapp.com",
  databaseURL: "https://farmaturno-b9c21.firebaseio.com",
  projectId: "farmaturno-b9c21",
  storageBucket: "farmaturno-b9c21.appspot.com",
  messagingSenderId: "188182078720",
  appId: "1:188182078720:web:15369ac47ef01967f9bfe5"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };

/*
//var auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//auth.signInAnonymously();
*/

//export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

