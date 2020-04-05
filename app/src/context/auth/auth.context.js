import React from 'react';

const DEFAULT_VALUES = {
    user: null,
    signIn: () => { },
    signOut: () => { },
    isLoggedIn: () => false,
    isLoading: () => true,
    deleteAccount: () => { }
}

const AuthContext = React.createContext(DEFAULT_VALUES);

AuthContext.displayName = 'AuthContext';

export default AuthContext;