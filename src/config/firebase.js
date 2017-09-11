import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYWrGZYw9zVcmDSaT8lZyby4iQJlyBfW4",
    authDomain: "azera-30f0b.firebaseapp.com",
    databaseURL: "https://azera-30f0b.firebaseio.com",
    projectId: "azera-30f0b",
    storageBucket: "azera-30f0b.appspot.com",
    messagingSenderId: "1000052007071"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database;
export const firebaseAuth = firebase.auth;