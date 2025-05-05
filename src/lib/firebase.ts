// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkLnxxGFeqR8c7yXfdbIUHHcCv8q53pa4",
  authDomain: "stha-6cd04.firebaseapp.com",
  projectId: "stha-6cd04",
  storageBucket: "stha-6cd04.firebasestorage.app",
  messagingSenderId: "462978016735",
  appId: "1:462978016735:web:5e88d87fe4ecdc8985106a",
  measurementId: "G-RMSNXYY3YT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
