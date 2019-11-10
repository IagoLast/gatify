import * as firebase from 'firebase/app';

export default function UseRegister() {
    const currentUser = firebase.auth().currentUser;

    function createUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    return [createUser, currentUser]
}