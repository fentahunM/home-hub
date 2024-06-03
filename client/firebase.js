// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-hub-7c26b.firebaseapp.com",
  projectId: "home-hub-7c26b",
  storageBucket: "home-hub-7c26b.appspot.com",
  messagingSenderId: "8409770109",
  appId: "1:8409770109:web:daaa2208ab382ad4476914",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
