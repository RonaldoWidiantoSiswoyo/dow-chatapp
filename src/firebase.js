import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiaO13INhriZtSQVdyzhita3g6dptqods",
  authDomain: "chat-2fd8e.firebaseapp.com",
  projectId: "chat-2fd8e",
  storageBucket: "chat-2fd8e.appspot.com",
  messagingSenderId: "912764061776",
  appId: "1:912764061776:web:4915302e74028a65752955",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
