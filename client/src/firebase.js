// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "fullstack-blog-app-c69a6.firebaseapp.com",
    projectId: "fullstack-blog-app-c69a6",
    storageBucket: "fullstack-blog-app-c69a6.appspot.com",
    messagingSenderId: "361869287084",
    appId: "1:361869287084:web:f2ada0e16772d72de5c909",
    measurementId: "G-X3GRLTRH85"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
