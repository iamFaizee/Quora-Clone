// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexuYtYmUdYai62bbcAaNzD5_sp90DL6w",
  authDomain: "quora-clone-97c15.firebaseapp.com",
  projectId: "quora-clone-97c15",
  storageBucket: "quora-clone-97c15.appspot.com",
  messagingSenderId: "39708335381",
  appId: "1:39708335381:web:357d53fdc14227a94a1d1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
