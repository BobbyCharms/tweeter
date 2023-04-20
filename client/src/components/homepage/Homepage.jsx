import Twit from '../Twit';
import twits from '../../utils/dummyTwitData';
import Login from '../pages/Login';

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
      {twits.map((item) => (
        <Twit username={item.username} twit={item.twit} />
      ))}
      <button onClick={newTwit}>+</button>
    </div>
  );
}

export default Homepage;
