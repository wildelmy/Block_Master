import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-NslpQKviZuOSCgWUQlluYDmqU28A418",
  authDomain: "block-master-71fe2.firebaseapp.com",
  projectId: "block-master-71fe2",
  storageBucket: "block-master-71fe2.appspot.com",
  messagingSenderId: "748444767758",
  appId: "1:748444767758:web:c0db5950276760fdfd0e5f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();

export{
  db,
  google,
  firebase 
}