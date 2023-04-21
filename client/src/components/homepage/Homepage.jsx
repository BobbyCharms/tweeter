import React from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_TWITS } from '../../utils/queries';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_TWITS);
  const twits = data?.twits || [];

  return <>{loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}</>;
};

const newTwit = () => {
  //create a new twit
};

export default Homepage;
