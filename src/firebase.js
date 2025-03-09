// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: "next-estate-fed52.firebaseapp.com",
  // projectId: "next-estate-fed52",
  // storageBucket: "next-estate-fed52.firebasestorage.app",
  // messagingSenderId: "1035171161688",
  // appId: "1:1035171161688:web:e81b95e9565e464b478c2d"

	  authDomain: "praktikum-e2a02.firebaseapp.com",
	  projectId: "praktikum-e2a02",
	  storageBucket: "praktikum-e2a02.firebasestorage.app",
	  messagingSenderId: "823872004855",
	  appId: "1:823872004855:web:2c2689f7a834b6f2dd29f2",
	  measurementId: "G-Z5VBNE56X1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);