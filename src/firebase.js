import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhZIxWJ1fRuwpwX6EOTtUPy1HpNRtX38A",
    authDomain: "react-contact-form-92233.firebaseapp.com",
    projectId: "react-contact-form-92233",
    storageBucket: "react-contact-form-92233.appspot.com",
    messagingSenderId: "734109595186",
    appId: "1:734109595186:web:63f11972158f40d2ef6e2b"
 
});

var db = firebaseApp.firestore();

export{ db };