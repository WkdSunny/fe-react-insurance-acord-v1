// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbMc8-rM2Wmkqxv7gF5e3ua3gfaXnDaM",
  authDomain: "insurance-acord-v1.firebaseapp.com",
  projectId: "insurance-acord-v1",
  storageBucket: "insurance-acord-v1.appspot.com",
  messagingSenderId: "24173560646",
  appId: "1:24173560646:web:6a6f06f4332f77254e1b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);