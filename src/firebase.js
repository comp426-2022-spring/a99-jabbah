// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBreYhHyfv3VUOWLbpvRd3je_M3O2eEh0",
  authDomain: "login-database-4b257.firebaseapp.com",
  projectId: "login-database-4b257",
  storageBucket: "login-database-4b257.appspot.com",
  messagingSenderId: "200870116589",
  appId: "1:200870116589:web:14749bc87f26f1d5efe0e4",
  measurementId: "G-JX9M9679ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
