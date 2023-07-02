import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useLoginRegister from '../../../utilities/useLoginRegister';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const { handleSignIn, error } = useLoginRegister();

    return (
        <>
            <h3 className="text-center fw-bold text-primary">Login!!!</h3>
            <Form className='w-75 mx-auto mt-3' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text>
                    New User? <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className="mt-3 mb-2 d-block fw-bold text-danger">{error?.message}</Form.Text>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

            <ToastContainer
                position='top-center'
            />
        </>

    );
};

export default Login;