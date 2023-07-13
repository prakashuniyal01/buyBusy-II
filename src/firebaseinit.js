// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ9GVhCyQabyTmQIrc7kWh09kpMdpFkbk",
  authDomain: "e-mart-8905.firebaseapp.com",
  projectId: "e-mart-8905",
  storageBucket: "e-mart-8905.appspot.com",
  messagingSenderId: "281595465225",
  appId: "1:281595465225:web:c3337b37232076f103f2d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
