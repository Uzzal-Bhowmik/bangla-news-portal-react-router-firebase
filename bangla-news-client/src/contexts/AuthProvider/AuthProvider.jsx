import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext("default-value");

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // external sign in methods
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sign in & sign up with email/password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false)
        })

        return () => unsubscribe();
    }, [])


    // sign out method
    const logOut = () => {
        return signOut(auth);
    }

    const contextValue = { user, providerLogin, signIn, signUp, logOut };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;