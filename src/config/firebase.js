// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_9NtGYng1Ra5PtKk_ifQoys6ZH-goMc",
  authDomain: "michael--artist.firebaseapp.com",
  databaseURL: "https://michael--artist-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "michael--artist",
  storageBucket: "michael--artist.appspot.com",
  messagingSenderId: "690442290094",
  appId: "1:690442290094:web:62e0a17e181182ce23fe3f",
  measurementId: "G-GGJ7KLTS88"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default fire;