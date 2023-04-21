import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Twit.css';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';

const containerStyles = {
    height: "auto"
}

const cardStyles = {
  width: '36rem',
};

function Twit(props) {
  return (
    <div className="twit">
        <Container className="d-flex justify-content-center mb-5" style={containerStyles}>
      <Card style={cardStyles}>
        <Card.Header as="h5">
            <Link to={`/${props.userId}`}>
                <b>@{props.username}:</b>
            </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.twit}</Card.Title>
          <Card.Text>{props.createdOn}</Card.Text>
          <Container className="d-flex justify-content-start" style={containerStyles}>
            <Chat className="mx-3"/>
            <HandThumbsUp className="mx-3"/>
            <HandThumbsDown className="mx-3"/>
          </Container>
        </Card.Body>
      </Card>
      <div>
      </div>
      
    </ Container>
    </div>
  );
}

export default Twit;
