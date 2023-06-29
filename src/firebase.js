// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1BJP56knbxGg22Q26nehjyfrbTBhCcgE",
  authDomain: "clone-2d4ca.firebaseapp.com",
  projectId: "clone-2d4ca",
  storageBucket: "clone-2d4ca.appspot.com",
  messagingSenderId: "158743269377",
  appId: "1:158743269377:web:9eeffbbb26f29d8483b000",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
