import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLPkz9WLHOYqfphFe1Zd5RPc2QIMm612c",
    authDomain: "fire-ef540.firebaseapp.com",
    databaseURL: "https://fire-ef540.firebaseio.com",
    projectId: "fire-ef540",
    storageBucket: "fire-ef540.appspot.com",
    messagingSenderId: "329150926089"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;