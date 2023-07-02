import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useLoginRegister from '../../../utilities/useLoginRegister';

const Register = () => {
    const { handleSignUp, error } = useLoginRegister();
    return (
        <>
            <h3 className="text-center fw-bold text-primary">Register!!!</h3>
            <Form className='w-75 mx-auto mt-3' onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-muted mb-2 d-block">
                    {error?.message}
                </Form.Text>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </>
    );
};

export default Register;