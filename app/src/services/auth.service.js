import * as firebase from 'firebase/app';

export function googleLogin() {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}


export function getUser() {
    // return {
    //     photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mDGpfeorO4EuBas_tSs8xOWZSWTomgax56ydrdSxA',
    //     displayName: 'Iago Lastra',
    // }
    return firebase.auth().currentUser;
}

export function isLoggedIn() {
    // return true;
    return firebase.auth().currentUser !== null;
}

export function signOut() {
    return firebase.auth().signOut();
}

export default { googleLogin, getUser, isLoggedIn, signOut };