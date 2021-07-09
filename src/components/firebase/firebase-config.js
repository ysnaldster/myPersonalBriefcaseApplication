import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuv4vXJE4p4fjSR7-VknnKNFL04DHxvGg",
    authDomain: "mi-portafolio-e517b.firebaseapp.com",
    projectId: "mi-portafolio-e517b",
    storageBucket: "mi-portafolio-e517b.appspot.com",
    messagingSenderId: "360768185708",
    appId: "1:360768185708:web:0d2150c0bf53fa5dc53f49"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
