import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
