import React from 'react';

const AuthContext = React.createContext({ loading: true, user: null });

AuthContext.displayName = 'AuthContext';

export default AuthContext;