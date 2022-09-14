import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCD4_jN-KLJonsMWpbqj5k8vY8YAEI_OM8",
  authDomain: "interviewjs.firebaseapp.com",
  databaseURL: "https://interviewjs.firebaseio.com",
  projectId: "interviewjs",
  storageBucket: "interviewjs.appspot.com",
  messagingSenderId: "1010159610142",
  appId: "1:1010159610142:web:462dbdca67fa6e4285010f",
};

const firebase = initializeApp(config);
const auth = getAuth();
const db = getFirestore(firebase);

export { firebase, auth, db };
