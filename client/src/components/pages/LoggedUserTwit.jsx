import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_TWITS } from '../../utils/queries';
import ManyTwits from '../../twit/manyTwits';
import { getToken } from '../../utils/auth';

const LoggedUserTwit = () => {
  const userId = getToken().user._id;

  const { loading, error, data } = useQuery(QUERY_USER_TWITS, {
    variables: { userId: userId },
  });
  if (error) {
    return <div>Error</div>;
  }
  const twits = data?.userTwits || [];
  console.log(data);
  console.log(twits);
  return <>{loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}</>;
};

export default LoggedUserTwit;
