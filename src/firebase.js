// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkMZATtWqa7es1Ui_vJhGBfh3ur96r4Y",
  authDomain: "inmovies-8da1d.firebaseapp.com",
  projectId: "inmovies-8da1d",
  storageBucket: "inmovies-8da1d.appspot.com",
  messagingSenderId: "265162467900",
  appId: "1:265162467900:web:982a8818ab9d0c5ef2f139"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);