import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './comments.css';
import { Link } from 'react-router-dom';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';
import { DELETE_COMMENT } from '../../utils/mutations';
import { getUser, loggedIn } from '../../utils/auth';
import { useMutation } from '@apollo/client';

const containerStyles = {
  height: 'auto',
};
const cardStyles = {
  width: '30rem',
};

const Comment = (props) => {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  if (loggedIn()) {
    useEffect(() => {
      setUserId(getUser().data._id);
    });
  }

  const [deleteCommentMutation, { error, data }] = useMutation(DELETE_COMMENT);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteCommentMutation({
        variables: { commentId: props.id },
      });
      data ? setIsDeleted(true) : setIsDeleted(false);
    } catch (e) {
      console.error(e);
    }
  };

  if (isDeleted) {
    return null; // If the Twit has been deleted, render nothing
  }

  return (
    <Container
      className="d-flex justify-content-center mb-5"
      style={containerStyles}
    >
      <Card style={cardStyles}>
        <Card.Header as="h5" className="d-flex justify-content-between">
          <Link to={`/${props.userId}`}>
            <b>@{props.username}</b>
          </Link>
          {props.userId === userId && loggedIn() ? (
            <button onClick={handleDelete}>x</button>
          ) : (
            <></>
          )}
        </Card.Header>
        <Card.Body>
          <Card.Title className="commentFont">{props.comment}</Card.Title>
          <Card.Text className="commentFont">{props.createdOn}</Card.Text>

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
};

export default Comment;
