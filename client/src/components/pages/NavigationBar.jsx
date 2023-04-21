import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Homepage from '../homepage/Homepage';
import Login from './Login';
import  {Link}from 'react-router-dom';
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' style={{marginRight:'10px'}}>Homepage</Link>
            <Link to='/register'>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
