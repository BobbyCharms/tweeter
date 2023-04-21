import React from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';

const newTwit = () => {
  //create a new twit
};

function Homepage() {
  return (
    <div>
      <div>
        <Link to="/">
          <p>Homepage</p>
        </Link>
        {loggedIn() ? (
          <button type="button" onClick={() => logout()}>
            Log out
          </button>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
          // Link to mytweeter
        )}
      </div>
      <ManyTwits />
      <button onClick={newTwit}>+</button>
    </div>
  );
}

export default Homepage;
