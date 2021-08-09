import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5sImzz_IrUV9qwDM0FIbv6jipG7Fly4c",
    authDomain: "fb-messenger-clone-divya.firebaseapp.com",
    projectId: "fb-messenger-clone-divya",
    storageBucket: "fb-messenger-clone-divya.appspot.com",
    messagingSenderId: "698585930610",
    appId: "1:698585930610:web:5f459cb95aef3b7cd95beb",
    measurementId: "G-52EWW28CCB"
});

const db = firebaseApp.firestore();

export default db;
