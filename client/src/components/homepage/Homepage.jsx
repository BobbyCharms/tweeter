import Twit from "../Twit"
import twits from "../../utils/dummyTwitData"
import React from 'react';
import { Link } from 'react-router-dom';

const newTwit = () => {
  //create a new twit
};

function Homepage() {
  return (
    <div>
      <Login />
      <div>
        <a href="#">
          <p>Homepage</p>
        </a>
        <a href="#">
          <p>My Tweeter</p>
        </a>
      </div>
      {twits.map((item, index) => (
        <Twit key={index} username={item.username} twit={item.twit} />
      ))}
      <button onClick={newTwit}>+</button>
    </div>
  );
}

function Homepage() {return(
    <div>
        <div>
        <Link to="/">
            <p>Homepage</p>
        </Link>
        <Link to="/login">
            <p>My Tweeter</p>
        </Link>
        </div>
        {twits.map(item => <Twit username={item.username} twit={item.twit}/>)}
        <button onClick={newTwit}>+</button>
    </div>
)};

export default Homepage;
