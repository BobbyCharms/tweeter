import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import './Twit.css';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';
import { DELETE_TWIT } from '../utils/mutations';
import { getUser, loggedIn } from '../utils/auth';
import { useMutation } from '@apollo/client';

const containerStyles = {
  height: 'auto',
};

const cardStyles = {
  width: '36rem',
};

const Twit = (props) => {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  if (loggedIn()) {
    useEffect(() => {
      setUserId(getUser().data._id);
    });
  }
  const [deleteTwitMutation, { error, data }] = useMutation(DELETE_TWIT);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteTwitMutation({
        variables: { twitId: props.id },
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
    <div className="twit">
      <Container
        className="d-flex justify-content-center mb-5"
        style={containerStyles}
      >
        <Card style={cardStyles}>
          <Card.Header as="h5" className="d-flex justify-content-between">
            <Link to={`/${props.userId}`}>
              <b>@{props.username}:</b>
            </Link>
            {props.userId === userId && loggedIn() ? (
              <button onClick={handleDelete}>x</button>
            ) : (
              <></>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>{props.twit}</Card.Title>
            <Card.Text>{props.createdOn}</Card.Text>
            <Container
              className="d-flex justify-content-start"
              style={containerStyles}
            >
              <Link to={`/twit/${props.id}`}>
                <Chat className="mx-3" />
              </Link>
              <HandThumbsUp className="mx-3" />
              <HandThumbsDown className="mx-3" />
            </Container>
          </Card.Body>
        </Card>
        <div></div>
      </Container>
    </div>
  );
};

export default Twit;
