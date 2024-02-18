// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth" 
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGHkc6UhCFVtAyR4C5eaba5-XIDBjzJC4",
  authDomain: "sportify-2f18d.firebaseapp.com",
  projectId: "sportify-2f18d",
  storageBucket: "sportify-2f18d.appspot.com",
  messagingSenderId: "941659228958",
  appId: "1:941659228958:web:6ff070abfe648f994b970f",
  measurementId: "G-9M9JZ01SP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const auth = getAuth(app) //set up authentication 
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
