import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import './Twit.css';
import { HandThumbsUp, HandThumbsDown, Chat } from 'react-bootstrap-icons';
import { DELETE_TWIT } from '../utils/mutations';
import { getUser, getToken, loggedIn } from '../utils/auth';
import { useMutation } from '@apollo/client';

const containerStyles = {
  height: 'auto',
};

const cardStyles = {
  width: '36rem',
};

const alignRight = {
  textAlign: 'right',
};

// function Twit(props) {
const Twit = (props) => {
  const [logIn, setLoggedIn] = useState(loggedIn());
  const [userId, setUserId] = useState('');

  if (logIn) {
    useEffect(() => {
      setUserId(getUser().data._id);
    });
  }
  const [deleteTwitMutation, { error, data }] = useMutation(DELETE_TWIT);

  return (
    <div className="twit">
      <Container
        className="d-flex justify-content-center mb-5"
        style={containerStyles}
      >
        <Card style={cardStyles}>
          <Card.Header as="h5">
            <Link to={`/${props.userId}`}>
              <b>@{props.username}:</b>
            </Link>
            {props.userId === userId && logIn ? (
              <div style={alignRight}>x</div>
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
              <Chat className="mx-3" />
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
