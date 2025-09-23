// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWj55lLQPmjYqtaUzx6c7OGGklLBRAeAE",
  authDomain: "clone-cfc21.firebaseapp.com",
  projectId: "clone-cfc21",
  storageBucket: "clone-cfc21.firebasestorage.app",
  messagingSenderId: "416167653878",
  appId: "1:416167653878:web:db205c5e8feaa88310d7d7",
  measurementId: "G-W209J6C4EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);