import Twit from "../Twit"
import twits from "../../utils/dummyTwitData"

const newTwit = () => {
    //create a new twit
}

function Homepage() {return(
    <div>
        <div>
            <a href="#"><p>Homepage</p></a>
            <a href="#"><p>My Tweeter</p></a>
        </div>
        {twits.map(item => <Twit {...item}/>)}
        <button onClick={newTwit}>+</button>
    </div>
)};

export default Homepage;
