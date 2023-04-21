import React from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import  {Link}from 'react-router-dom';
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{display:'flex',flexDirection:"column"}}>
            <div>
            <Button variant="warning" href='/' style={{marginRight:'10px'}}>Homepage</Button>{' '}
            </div>
            <div>
            <Button variant="warning" href='login'>Login</Button>{' '}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
