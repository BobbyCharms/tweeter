// import twits from '../utils/dummyTwitData';
import Twit from './Twit';

function ManyTwits({twits}) {
    
    return(
    <div>
        {twits.map((item, index) => (
        <Twit key={index} username={item.username} twit={item.twitText} />
        ))}
    </div>
)}

export default ManyTwits; 
