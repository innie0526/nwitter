import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //사용자 인증용
import "firebase/database"; //트윗용 database

// import firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUR_ID,
};

// Initialize Firebase/ firebase project 만들어줌
const app = initializeApp(firebaseConfig);

// getAuth() authService -> 사용자 인증에 관한 서비스 . App.js/ Auth.js 로 연결 됨
export const authService = getAuth(app);

// export const firebaseInstance = firebase;
export default firebaseConfig;
