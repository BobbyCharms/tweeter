import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loggedIn, logout } from '../../utils/auth';
import { getToken, getUser } from '../../utils/auth';

const NavigationBar = () => {
  let userId = '';
  if (getToken()) {
    let userId = '/' + getUser().data._id;
    console.log(userId);
  }
  console.log(loggedIn());

  return (
        <Navbar.Collapse id="basic-navbar-nav" style={{ display: 'flex',backgroundColor:'#FFE600' }}>
          <Nav
            className="me-auto "
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div>
              <Link to="/">
                <Button variant="warning" style={{ marginBottom: '10px' }}>
                  Home
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
                  <Link to={`/user/${getUser().data._id}`}>
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
  );
};

export default NavigationBar;

