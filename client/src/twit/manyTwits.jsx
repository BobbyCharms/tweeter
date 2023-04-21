// import twits from '../utils/dummyTwitData';
import Twit from './Twit';

function ManyTwits() {return(
    <div>
        {twits.map((item, index) => (
        <Twit key={index} username={item.username} twit={item.twit} />
        ))}
    </div>
)}

export default ManyTwits; 
