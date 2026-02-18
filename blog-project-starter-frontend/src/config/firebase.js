// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCT7jaE6fQ4RGWESP-fM3bev44Meag0fo0",
  authDomain: "blog-app-raji.firebaseapp.com",
  projectId: "blog-app-raji",
  storageBucket: "blog-app-raji.firebasestorage.app",
  messagingSenderId: "892993314324",
  appId: "1:892993314324:web:7d8a3bfe7c7a7112471101",
  measurementId: "G-JTQ9YH05C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth
