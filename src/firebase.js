// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJv1Xsr72LXJg7fKZIbru5NBd6Ws-9CSY",
  authDomain: "clone-5eb65.firebaseapp.com",
  projectId: "clone-5eb65",
  storageBucket: "clone-5eb65.firebasestorage.app",
  messagingSenderId: "921128064193",
  appId: "1:921128064193:web:c268cfb4d430dfaa15b040",
  measurementId: "G-Y7CC1CN7JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);