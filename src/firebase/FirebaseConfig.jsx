// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA3Qyy9V6gx6iD87Z3rQBapeuOrM0IhuUc",
  authDomain: "ecomerce-56e4a.firebaseapp.com",
  projectId: "ecomerce-56e4a",
  storageBucket: "ecomerce-56e4a.appspot.com",
  messagingSenderId: "36525096873",
  appId: "1:36525096873:web:070e0ed9b6b619fd2aceb8",
  measurementId: "G-6FYW8MCDH7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firedB = getFirestore(app);
const auth = getAuth(app);

export { firedB, auth };
