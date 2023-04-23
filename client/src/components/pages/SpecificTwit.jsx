import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { loggedIn } from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_TWIT } from '../../utils/queries';
import AddComment from '../comments/addComment.jsx';
import Twit from '../../twit/Twit.jsx';
import ManyComments from '../comments/manyComments.jsx';

const SpecificTwit = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_TWIT, {
    variables: { twitId: id },
  });
  if (error) {
    return <div>Error</div>;
  }
  const twit = data?.singleTwit || {};

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Twit
            username={twit.username}
            twit={twit.twitText}
            userId={twit.userId}
            id={twit._id}
            createdAt={twit.createdAt}
          />
          {loggedIn() ? <AddComment twitId={twit._id} /> : null}
          {twit.comments?.length > 0 ? (
            <ManyComments comments={twit.comments} />
          ) : (
            <div className="text-center">No comments</div>
          )}
        </div>
      )}
    </>
  );
};

export default SpecificTwit;
