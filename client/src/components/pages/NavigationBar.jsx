import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loggedIn, logout } from '../../utils/auth';
import { getToken, getUser } from '../../utils/auth';

const NavigationBar = () => {
  let userId = '';
  if (getToken()) {
    let userId = '/' + getUser().data._id;
    console.log(getUser().data._id);
  }
  console.log(loggedIn());

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto "
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div>
              <Link to="/">
                <Button variant="warning" style={{ marginRight: '10px' }}>
                  Homepage
                </Button>{' '}
              </Link>
            </div>
            {!loggedIn() ? (
              <>
                <div>
                  <Link to="/login">
                    <Button variant="warning">Login</Button>{' '}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to={userId}>
                    <Button variant="warning">My Twits</Button>{' '}
                  </Link>
                </div>
                <div>
                  <Button variant="warning" onClick={() => logout()}>
                    Logout
                  </Button>{' '}
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
