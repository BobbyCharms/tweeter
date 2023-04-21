import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';

import { login } from '../../utils/auth';
// hooho
import styles from './Login.module.css';

<<<<<<< HEAD
const Login = (props) => {
=======
const Login = () => {
>>>>>>> e1f760f29a74baaa51b528a8d00acb0e959bef58
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginMutation] = useMutation(LOGIN);

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
      console.log(formState);
      const { data } = await loginMutation({
        variables: { ...formState },
      });

      login(data.login.token);
      console.log(data.login.user._id);
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
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
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
