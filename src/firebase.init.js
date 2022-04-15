// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALxQKTBGanNhSyb5CxU9D1C41P9LBBfGQ",
  authDomain: "red-onion-fastfood.firebaseapp.com",
  projectId: "red-onion-fastfood",
  storageBucket: "red-onion-fastfood.appspot.com",
  messagingSenderId: "903098209498",
  appId: "1:903098209498:web:dfe11cde9739b137fac1e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
