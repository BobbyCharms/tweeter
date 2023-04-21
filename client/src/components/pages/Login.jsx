import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';

import { login } from '../../utils/auth';

// function Login() {
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="d-flex justify-content-around">
      <div
        style={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}
      >
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="col-12" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="warning  btn-lg"
            type="submit"
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>

          <Link
            to="/register"
            className="btn btn-warning btn-lg"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Sign Up
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
