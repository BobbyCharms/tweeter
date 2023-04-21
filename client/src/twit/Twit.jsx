import "./Twit.css";
import { HandThumbsUp, HandThumbsDown, Chat  } from 'react-bootstrap-icons';

function Twit(props) {return(
    <div className="twit">
        <p><b>@{props.username}:</b> {props.twitText}</p>
        <div>
            <HandThumbsUp />
            <HandThumbsDown />
            <Chat />
        </div>
    </div>
)};

export default Twit;
