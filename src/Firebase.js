// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const firebaseConfig = {
    apiKey: "AIzaSyBPpIWz7vFuxHgCP2a6Bgq_dsA_vI2sFLk",
    authDomain: "usmart-ca570.firebaseapp.com",
    projectId: "usmart-ca570",
    storageBucket: "usmart-ca570.appspot.com",
    messagingSenderId: "905623931581",
    appId: "1:905623931581:web:a110c121dd8aaed6ab45d4"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export {db};