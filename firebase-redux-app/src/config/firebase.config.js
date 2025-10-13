
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyC6A8pjFZBurmX-fRCmoPZcoVtGM1xV8",
  authDomain: "react-10-properties.firebaseapp.com",
  projectId: "react-10-properties",
  storageBucket: "react-10-properties.firebasestorage.app",
  messagingSenderId: "668157752903",
  appId: "1:668157752903:web:cb4bf62a7d5d6e20cf6362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);