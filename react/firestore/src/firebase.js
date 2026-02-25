// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjBtJuV1urXe0rGSFoUz7NP1ykHyEg8w",
  authDomain: "reactproject-f2db3.firebaseapp.com",
  projectId: "reactproject-f2db3",
  storageBucket: "reactproject-f2db3.firebasestorage.app",
  messagingSenderId: "663697400994",
  appId: "1:663697400994:web:b9bb1cda4211d63d5863fb",
  measurementId: "G-FL3GQ3R8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
