// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9EobaZns-oEm6PhCcdaf3wQUkiCh2WdY",
  authDomain: "netflixapp-6d7ec.firebaseapp.com",
  projectId: "netflixapp-6d7ec",
  storageBucket: "netflixapp-6d7ec.appspot.com",
  messagingSenderId: "707388514967",
  appId: "1:707388514967:web:34158efe8247fca1477fd2",
  measurementId: "G-W20Q9CNXK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
