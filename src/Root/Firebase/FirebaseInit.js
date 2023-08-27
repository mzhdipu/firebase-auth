// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFFIjGxVt1iKImsg0A9zq1cOcE8E7TDpU",
  authDomain: "simple-firebase-auth-65f31.firebaseapp.com",
  projectId: "simple-firebase-auth-65f31",
  storageBucket: "simple-firebase-auth-65f31.appspot.com",
  messagingSenderId: "4765914936",
  appId: "1:4765914936:web:d55e307e49880cbcd153cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app