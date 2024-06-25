import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy3widLMh_An-DrhGvt0QMlj0-3carc9s",
  authDomain: "sou-drop.firebaseapp.com",
  projectId: "sou-drop",
  storageBucket: "sou-drop.appspot.com",
  messagingSenderId: "684597558004",
  appId: "1:684597558004:web:11bb2d287bea8b44873ca1",
  measurementId: "G-NDTV1673PX"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();



export {firebase, auth, db};