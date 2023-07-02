import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLoginRegister = () => {
    // context value 
    const { signUp, signIn, updateUserProfile, verifyEmail, setIsLoading } = useContext(AuthContext);
    const [error, setError] = useState("");

    // react router auth redirect
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const getCredentials = (form) => {
        const email = form.email.value;
        const password = form.password.value;
        const name = form?.name?.value;
        const photoUrl = form?.photoUrl?.value;
        return { form, email, password, name, photoUrl };
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setError("");
        const { form, email, password, name, photoUrl } = getCredentials(e.target);

        signUp(email, password)
            .then(result => {
                const user = result.user;

                form.reset();
                if (name && photoUrl) {
                    updateUserProfile(name, photoUrl)
                        .then(() => {/* profile updated */ })
                        .catch(error => setError(error))
                }

                // send verification email 
                verifyEmail()
                    .then(() => { })
                    .catch(error => setError(error));
                toast.success("Verification email was sent to your email address.");
            })
            .catch(error => setError(error))
    }


    const handleSignIn = (e) => {
        e.preventDefault();
        setError("");
        const { form, email, password } = getCredentials(e.target);

        signIn(email, password)
            .then((result) => {
                const user = result.user;

                form.reset();

                if (!(user.emailVerified)) {
                    toast.warn("Please verify your email to login");
                }
                else {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
    }


    return { handleSignUp, error, handleSignIn };
};

export default useLoginRegister;