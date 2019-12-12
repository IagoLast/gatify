import * as firebase from 'firebase/app';

export function googleLogin() {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

export function getUser() {
    return firebase.auth().currentUser;
}

export function isLoggedIn() {
    return firebase.auth().currentUser !== null;
}

export function signOut() {
    return firebase.auth().signOut();
}

export default { googleLogin, getUser, isLoggedIn, signOut };