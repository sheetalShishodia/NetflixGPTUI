// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8EpUQ90QWOeMsqrCSYWvjDBHLns8Z8HQ",
  authDomain: "netflixgpt-3e5dd.firebaseapp.com",
  projectId: "netflixgpt-3e5dd",
  storageBucket: "netflixgpt-3e5dd.appspot.com",
  messagingSenderId: "886677634289",
  appId: "1:886677634289:web:872ef9a910c2eabe193d50",
  measurementId: "G-VW2G665GL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);