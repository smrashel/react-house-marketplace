// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqEO7yFL_3yW65sb66m0w10zCq3BHO81c",
  authDomain: "house-marketplace-app-c168b.firebaseapp.com",
  projectId: "house-marketplace-app-c168b",
  storageBucket: "house-marketplace-app-c168b.appspot.com",
  messagingSenderId: "653818108966",
  appId: "1:653818108966:web:87b9c2cce3e1c1b5c09ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()