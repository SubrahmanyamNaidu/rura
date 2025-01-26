// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9uEDNLG0WNbYmj8MgkBsHUNvNxEvqgpE",
  authDomain: "rura-764ef.firebaseapp.com",
  projectId: "rura-764ef",
  storageBucket: "rura-764ef.firebasestorage.app",
  messagingSenderId: "50855316263",
  appId: "1:50855316263:web:88e8e40b2cd776de2e7702"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
