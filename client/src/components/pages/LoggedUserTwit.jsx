import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { loggedIn } from '../../utils/auth';
import { QUERY_USER_TWITS } from '../../utils/queries';
import ManyTwits from '../../twit/manyTwits';
import { getToken, getUser } from '../../utils/auth';
import AddTwit from '../../twit/addTwit';

const LoggedUserTwit = () => {
  const userId = getUser().data._id;

  const { loading, error, data } = useQuery(QUERY_USER_TWITS, {
    variables: { userId: userId },
  });
  if (error) {
    return <div>Error</div>;
  }
  const twits = data?.userTwits || [];
  console.log(data);
  console.log(twits);
  return (
    <>
      {loggedIn() ? <AddTwit /> : null}
      {loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}
    </>
  );
};

export default LoggedUserTwit;
