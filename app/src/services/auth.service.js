import firebase from 'firebase/app';
import app from 'services/firebaseApp.service';


function onAuthStateChanged(cb) {
    app.auth().onAuthStateChanged(cb);
}

function signOut() {
    return app.auth().signOut();
}

function signIn() {
    return app.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function isLoggedIn() {
    return app.auth().currentUser !== null;
}

function deleteAccount() {
    const response = window.confirm('Esto borrara totalmente tu cuenta ¿Estas seguro?');
    if (response) {
        return app.auth().currentUser.delete();
    }
}

export default {
    user: app.auth().currentUser,
    signIn,
    signOut,
    isLoggedIn,
    deleteAccount,
    onAuthStateChanged
}