// import twits from '../utils/dummyTwitData';
import Twit from './Twit';

function ManyTwits({ twits }) {
  return (
    <div>
      <h2 className="text-center">Twits</h2>
      {twits.map((item, index) => (
        <Twit
          key={index}
          username={item.username}
          twit={item.twitText}
          userId={item.userId}
          id={item._id}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
}

export default ManyTwits;
