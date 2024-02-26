// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5f757.firebaseapp.com",
  projectId: "mern-estate-5f757",
  storageBucket: "mern-estate-5f757.appspot.com",
  messagingSenderId: "669526875775",
  appId: "1:669526875775:web:4d7bfb77cf87680809294a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
