import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './normalize.css';
import * as serviceWorker from './serviceWorker';


const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA9MzbpwwZGC69TjUBWYiHLNe59Ps1qm-I",
    authDomain: "proyecto-generico-205719.firebaseapp.com",
    databaseURL: "https://proyecto-generico-205719.firebaseio.com",
    projectId: "proyecto-generico-205719",
    storageBucket: "proyecto-generico-205719.appspot.com",
    messagingSenderId: "667723889099",
    appId: "1:667723889099:web:bdbca76e3e030211901e4e"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
