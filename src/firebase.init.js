// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBli2jwLBOHd4z0i82sEtIZia2My3Sak6E",
  authDomain: "assignment10-e4ffa.firebaseapp.com",
  projectId: "assignment10-e4ffa",
  storageBucket: "assignment10-e4ffa.appspot.com",
  messagingSenderId: "281702904970",
  appId: "1:281702904970:web:af871e5a3f77b85fa5e973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;