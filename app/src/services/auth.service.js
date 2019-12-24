import firebase from 'services/firebase.service';


function onAuthStateChanged(cb) {
    firebase.auth().onAuthStateChanged(cb);
}

function signOut() {
    return firebase.auth().signOut();
}

function signIn() {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function isLoggedIn() {
    return firebase.auth().currentUser !== null;
}

function deleteAccount() {
    const response = window.confirm('Esto borrara totalmente tu cuenta ¿Estas seguro?');
    if (response) {
        return firebase.auth().currentUser.delete();
    }
}

export default {
    user: firebase.auth().currentUser,
    signIn,
    signOut,
    isLoggedIn,
    deleteAccount,
    onAuthStateChanged
}