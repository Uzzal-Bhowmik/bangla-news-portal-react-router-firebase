import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <>
            <h3 className="text-center fw-bold text-primary">Login!!!</h3>
            <Form className='w-75 mx-auto mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text className="text-muted mb-2 d-block"></Form.Text>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </>

    );
};

export default Login;