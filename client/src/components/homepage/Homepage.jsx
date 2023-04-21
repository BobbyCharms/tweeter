import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import styles from './Homepage.css?inline';
import { QUERY_TWITS } from '../../utils/queries';
import AddTwit from '../../twit/addTwit';
import { ADD_TWIT } from '../../utils/mutations';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_TWITS);
  const twits = data?.twits || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <AddTwit />
          <ManyTwits twits={twits} />
        </>
      )}
    </>
  );
};

export default Homepage;
