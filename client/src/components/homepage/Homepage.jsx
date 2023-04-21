import React from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';

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
        {/* {loggedIn ? (
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        ) : (
          <Link to="/login">
          <p>My Tweeter</p>
        </Link>  
        )} */}
      </div>
      <ManyTwits />
      <button onClick={newTwit}>+</button>
    </div>
  );
}

export default Homepage;
