import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqhacH3jvIT_LI7FJMi74ZLR5DXgAPSmo",
  authDomain: "authfirebase-ca423.firebaseapp.com",
  projectId: "authfirebase-ca423",
  storageBucket: "authfirebase-ca423.appspot.com",
  messagingSenderId: "456216737812",
  appId: "1:456216737812:web:92b4bd7cc115edc0588f01",
  measurementId: "G-ZS1DC8K2WM"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth();

export {app,auth};