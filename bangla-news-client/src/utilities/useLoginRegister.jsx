import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const useLoginRegister = () => {
    // context value 
    const { signUp, signIn } = useContext(AuthContext);
    const [error, setError] = useState("");

    const getCredentials = (form) => {
        const email = form.email.value;
        const password = form.password.value;
        return { form, email, password };
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setError("")
        const { form, email, password } = getCredentials(e.target);

        signUp(email, password)
            .then(result => {
                form.reset();
                console.log(result.user)
            })
            .catch(error => setError(error))
    }


    return { handleSignUp, error };
};

export default useLoginRegister;