import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './comments.css';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';

const containerStyles = {
  height: 'auto',
};
const cardStyles = {
  width: '36rem',
};

function Comment(props) {
  console.log(props);
  return (
    <Container
      className="d-flex justify-content-center mb-5"
      style={containerStyles}
    >
      <Card style={cardStyles}>
        <Card.Header as="h5">
          <b>@{props.username}</b>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.comment}</Card.Title>
          <Card.Text>{props.createdOn}</Card.Text>

          <Container
            className="d-flex justify-content-start"
            style={containerStyles}
          >
            {/* <HandThumbsUp className="mx-3" />
            <HandThumbsDown className="mx-3" /> */}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Comment;
