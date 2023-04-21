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
    <Container fluid style={{ width: '100vw', paddingLeft: '0px' }}>
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#FFE600',
          paddingLeft: '0px',
          paddingRight: '0px',
        }}
      >
        <Nav
          className="me-auto "
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10px',
          }}
        >
          <div>
            <Link to="/">
              <Button variant="warning" style={{ marginRight: '10px' }}>
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
                  <Button variant="warning" style={{ marginRight: '10px' }}>
                    My Twits
                  </Button>{' '}
                </Link>
              </div>
              <div>
                <Button
                  style={{ marginRight: '10px' }}
                  variant="warning"
                  onClick={() => logout()}
                >
                  Logout
                </Button>{' '}
              </div>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};

export default NavigationBar;
