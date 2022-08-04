// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //the firebase authentication API
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vEK6VpAHhtdvQJbUvVgWpOey1PB2XnY",
  authDomain: "fir-practice-990c3.firebaseapp.com",
  projectId: "fir-practice-990c3",
  storageBucket: "fir-practice-990c3.appspot.com",
  messagingSenderId: "197719913623",
  appId: "1:197719913623:web:d50f7dc07d5fda3aa425d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()