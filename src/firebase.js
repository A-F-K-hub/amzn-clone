import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fy9QYG5DWTxZS2O-WtWxpYXMC8yz0Ds",
  authDomain: "afk-amzn-clone.firebaseapp.com",
  projectId: "afk-amzn-clone",
  storageBucket: "afk-amzn-clone.appspot.com",
  messagingSenderId: "472212213041",
  appId: "1:472212213041:web:734b38a03bfe93e0773410",
  measurementId: "G-XYFVBLWP50",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
