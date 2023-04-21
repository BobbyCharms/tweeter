import Twit from '../../twit/Twit';
import twits from '../../utils/dummyTwitData';
import React from 'react';
import { Link } from 'react-router-dom';
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
      {twits.map((item, index) => (
        <Twit key={index} username={item.username} twit={item.twit} />
      ))}
      <button onClick={newTwit}>+</button>
    </div>
  );
}

export default Homepage;
