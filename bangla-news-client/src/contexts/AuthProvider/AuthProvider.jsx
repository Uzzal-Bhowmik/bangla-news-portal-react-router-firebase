import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext("default-value");

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const contextValue = { user, providerLogin };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;