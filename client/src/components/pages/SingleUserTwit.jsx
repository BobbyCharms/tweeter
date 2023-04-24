import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_USER_TWITS } from '../../utils/queries';
import ManyTwits from '../../twit/manyTwits';
import { getUser, loggedIn } from '../../utils/auth';

const SingleUserTwit = () => {
  const { id } = useParams();
  if (loggedIn()) {
    if (id === getUser().data._id) {
      // reload the page at /user/:id
      window.location.assign('/user/' + id);
    }
  }
  console.log(useParams());
  const { loading, error, data } = useQuery(QUERY_USER_TWITS, {
    variables: { userId: id },
  });
  if (error) {
    return <div>Denver</div>;
  }
  const twits = data?.userTwits || [];
  console.log(data);
  console.log(twits);
  return <>{loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}</>;
};

export default SingleUserTwit;
