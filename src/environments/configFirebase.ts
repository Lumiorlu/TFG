// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAU7RQIOBLyIpjGz6JI31xjwbHBpsnjk_I",
  authDomain: "tfg-app-d6949.firebaseapp.com",
  projectId: "tfg-app-d6949",
  storageBucket: "tfg-app-d6949.appspot.com",
  messagingSenderId: "165752842564",
  appId: "1:165752842564:web:a727be1f10cb37d6418f11",
  measurementId: "G-NJ1Z7PXTYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
