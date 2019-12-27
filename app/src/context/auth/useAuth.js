import { useEffect, useState } from 'react';
import authService from 'services/auth.service';

export default function useAuth() {
    const [state, setState] = useState({
        loading: true, // Prevent flickering
        user: null,
    });

    useEffect(() => {
        authService.onAuthStateChanged(user => {
            if (user !== state.user || state.loading === true) {
                setState({ user, loading: false });
            }
        });
    })

    function signOut() {
        return authService.signOut()
    }

    function signIn() {
        return authService.signIn();
    }

    function isLoggedIn() {
        return !!state.user;
    }

    function isLoading() {
        return state.loading;
    }

    function deleteAccount() {
        return authService.deleteAccount();
    }

    return { user: state.user, signIn, signOut, isLoggedIn, isLoading, deleteAccount };
}