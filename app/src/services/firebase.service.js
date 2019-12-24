import * as firebase from "firebase/app";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA9MzbpwwZGC69TjUBWYiHLNe59Ps1qm-I",
    authDomain: "proyecto-generico-205719.firebaseapp.com",
    databaseURL: "https://proyecto-generico-205719.firebaseio.com",
    projectId: "proyecto-generico-205719",
    storageBucket: "proyecto-generico-205719.appspot.com",
    messagingSenderId: "667723889099",
    appId: "1:667723889099:web:bdbca76e3e030211901e4e"
};

const app = firebase.initializeApp(FIREBASE_CONFIG);

export default app;