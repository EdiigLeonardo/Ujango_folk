// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSR9OSqP-c_wdOuH5FoR2WRS2mQwc3-sE",
  authDomain: "ujango-ff565.firebaseapp.com",
  projectId: "ujango-ff565",
  storageBucket: "ujango-ff565.appspot.com",
  messagingSenderId: "802275497036",
  appId: "1:802275497036:web:573c027ed32a146e0890e9",
  measurementId: "G-J8QZNYKKGB",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
