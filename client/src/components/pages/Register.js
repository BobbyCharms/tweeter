import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return 
  (<></>)

export default Register;
