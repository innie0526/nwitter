import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQhwyY4bpsxuKr4p5gyOjRGbaCl2Ci27I",
  authDomain: "nwitter-771f2.firebaseapp.com",
  projectId: "nwitter-771f2",
  storageBucket: "nwitter-771f2.appspot.com",
  messagingSenderId: "48013738271",
  appId: "1:48013738271:web:65eeefd11fc732783d302a",
  measurementId: "G-VK0WKS30Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
