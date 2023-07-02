import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext("default-value");

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // external sign in methods
    const providerLogin = (provider) => {
        setIsLoading(false);
        return signInWithPopup(auth, provider);
    }

    // sign in & sign up with email/password
    const signUp = (email, password) => {
        setIsLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setIsLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // verify email address 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setIsLoading(false)
        })

        return () => unsubscribe();
    }, [])


    // sign out method
    const logOut = () => {
        setIsLoading(false);
        return signOut(auth);
    }

    const contextValue = {
        user,
        isLoading,
        providerLogin,
        signIn,
        signUp,
        updateUserProfile,
        verifyEmail,
        logOut,
        setIsLoading
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;