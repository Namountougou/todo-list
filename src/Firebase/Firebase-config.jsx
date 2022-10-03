import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM8O0IsEL4yOx8EPh6UmwIvAEzLU8cg-4",
  authDomain: "fir-todo-471dc.firebaseapp.com",
  projectId: "fir-todo-471dc",
  storageBucket: "fir-todo-471dc.appspot.com",
  messagingSenderId: "955007654244",
  appId: "1:955007654244:web:90df5dbd5fa46f34790271",
};

// Initialize Firebase
const firebaseTodo = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseTodo);
