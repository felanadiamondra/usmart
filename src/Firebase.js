// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASlAuenT3KdmxmbnAlHWJi0aieO0TV99Y",
  authDomain: "usmart-515da.firebaseapp.com",
  projectId: "usmart-515da",
  storageBucket: "usmart-515da.appspot.com",
  messagingSenderId: "525964893633",
  appId: "1:525964893633:web:3a6b0f635c8043ff532340",
  measurementId: "G-HJXZC4ZEKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};