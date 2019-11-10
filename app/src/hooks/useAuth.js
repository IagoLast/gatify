import * as firebase from 'firebase/app';
import { useState } from 'react';

export default function useAuth() {
    const [state, setState] = useState({
        loading: true, // Prevent flickering
        user: null,
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user !== state.user || state.loading === true) {
            setState({ user, loading: false });
        }
    });

    function signOut() {
        return firebase.auth().signOut();
    }

    function signIn() {
        return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    function isLoggedIn() {
        return state.user !== null;
    }

    function isLoading() {
        return state.loading;
    }

    function deleteAccount() {
        const response = window.confirm('Esto borrara totalmente tu cuenta ¿Estas seguro?');
        if (response) {
            return state.user.delete();
        }
    }

    return [state.user, signIn, signOut, isLoggedIn, isLoading, deleteAccount];
}