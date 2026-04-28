import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase asli milik lu
const firebaseConfig = {
  apiKey: "AIzaSyAbVVdBEKW--zrAEN8OI71YHRTLOYEnQTU",
  authDomain: "th-media-1bc27.firebaseapp.com",
  projectId: "th-media-1bc27",
  storageBucket: "th-media-1bc27.firebasestorage.app",
  messagingSenderId: "714737128940",
  appId: "1:714737128940:web:a17012b37dc4d514df9cc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);