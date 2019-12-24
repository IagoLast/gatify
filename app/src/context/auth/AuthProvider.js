import React from 'react';
import AuthContext from './auth.context';
import useAuth from './useAuth';;

export default function AuthProvider(props) {
    const authStore = useAuth();
    return (
        <AuthContext.Provider value={authStore}>
            {props.children}
        </AuthContext.Provider>
    );
}