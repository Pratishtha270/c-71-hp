import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCnX12MQ9IPlpkK5kQfCUn7Readz3o1h50",
    authDomain: "c71-hp.firebaseapp.com",
    projectId: "c71-hp",
    storageBucket: "c71-hp.appspot.com",
    messagingSenderId: "701825634435",
    appId: "1:701825634435:web:98080b9a15ea61fd104bb6"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
