import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Twit.css";
import { HandThumbsUp, HandThumbsDown, Chat  } from 'react-bootstrap-icons';

function Twit(props) {return(
    <div className="twit">
        <Card>
            <Card.Header as="h5"><b>@{props.username}:</b></Card.Header>
            <Card.Body>
                <Card.Title>{props.twit}</Card.Title>
             <Card.Text>
                {props.createdOn}
                </Card.Text>
                <Chat />
            </Card.Body>
            </Card>
        <div>
            <HandThumbsUp />
            <HandThumbsDown />
        </div>
    </div>
)};

export default Twit;
