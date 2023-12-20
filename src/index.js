import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Login: https://firebase.google.com/docs/auth/web/start?hl=de

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

// Hier wird das Analytics-Modul korrekt importiert und initialisiert
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Wenn du die Leistung deiner App messen möchtest, kannst du reportWebVitals nutzen
reportWebVitals();
