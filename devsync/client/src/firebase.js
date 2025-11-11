// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI5BV53NVzmy3tPHsx0ZA0OqHzlZRoymQ",
  authDomain: "devsync-a127d.firebaseapp.com",
  projectId: "devsync-a127d",
  storageBucket: "devsync-a127d.firebasestorage.app",
  messagingSenderId: "825181998269",
  appId: "1:825181998269:web:d6ef859ab139329fb9fbd4",
  measurementId: "G-V6L24RYXZH"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app) ;
    export const googleProvider = new GoogleAuthProvider() ;
   