import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_TWIT } from '../../utils/queries';
import { Twit } from '../../twit/Twit.jsx';
// create code for a single twit with all its comments renderings
const SpecificTwit = () => {
  const { twitId } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_TWIT, {
    variables: { twitId: twitId },
  });
  if (error) {
    return <div>Error</div>;
  }
  const twit = data?.singleTwit || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Twit twit={twit} />
          {twit.comments.length > 0 ? <CommentList /> : <div>No comments</div>}
        </div>
      )}
    </>
  );
};

export default SpecificTwit;
