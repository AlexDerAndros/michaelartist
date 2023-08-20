import {getFirestore} from '@firebase/firestore'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firestore = getFirestore(app); // Firestore-Komponente
// Required for side-effects
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