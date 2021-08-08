import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVfrY2IudHH40m-JbwCl1Ygurwmia-yi0",
    authDomain: "todo-app-react-61d19.firebaseapp.com",
    projectId: "todo-app-react-61d19",
    storageBucket: "todo-app-react-61d19.appspot.com",
    messagingSenderId: "369287387325",
    appId: "1:369287387325:web:cc8d7e2179af09b805ffd4",
    measurementId: "G-05RL4H1Z25"
});

const db = firebaseApp.firestore();

export default db;
