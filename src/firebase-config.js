import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "sua_api_key",
  authDomain: "domain",
  projectId: "project_id",
  storageBucket: "storageBucket",
  messagingSenderId: "....",
  appId: "...",
  measurementId: "..."
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();



export {firebase, auth, db};
