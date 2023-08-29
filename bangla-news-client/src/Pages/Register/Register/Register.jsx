import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useLoginRegister from "../../../utilities/useLoginRegister";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  const { handleSignUp, error } = useLoginRegister();
  const [isChecked, setIsChecked] = useState(false);
  useTitle("Register");

  return (
    <>
      <h3 className="text-center fw-bold text-primary">Register!!!</h3>
      <Form className="w-75 mx-auto mt-3" onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Enter photo url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text>
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>

        <Form.Text className="mt-3 mb-2 d-block fw-bold text-danger">
          {error?.message}
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label={
              <>
                I have read the <Link to="/terms">Terms and Conditions</Link>
              </>
            }
            onClick={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isChecked}>
          Sign Up
        </Button>
      </Form>

      <ToastContainer position="top-center" />
    </>
  );
};

export default Register;
