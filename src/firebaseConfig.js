import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCZwlzdglWAs2smL53LtZ7Z0b9etyk_-UY",
  authDomain: "typing-test97.firebaseapp.com",
  projectId: "typing-test97",
  storageBucket: "typing-test97.appspot.com",
  messagingSenderId: "231670254296",
  appId: "1:231670254296:web:5ea28e53db91807f29e5ad",
  measurementId: "G-W5JDJYK11F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

// <------------------------------------------------------------------->

