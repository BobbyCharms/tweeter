import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_TWIT } from '../../utils/queries';
import Twit from '../../twit/Twit.jsx';
// import CommentList from '../../twit/CommentList';

const SpecificTwit = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_TWIT, {
    variables: { twitId: id },
  });
  console.log(data);
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
          />
          {/* {twit.comments.length > 0 ? <CommentList /> : <div>No comments</div>} */}
        </div>
      )}
    </>
  );
};

export default SpecificTwit;
