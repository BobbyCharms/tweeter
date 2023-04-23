import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_TWITS, QUERY_SINGLE_USER } from '../../utils/queries';
import { getUser } from '../../utils/auth';
import { useParams } from 'react-router-dom';

// import ManyTwits from '../../twit/manyTwits';

const AddComment = ({ twitId }) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [addCommentMutation, { error }] = useMutation(ADD_COMMENT, {
    // The update method allows us to access and update the local cache
    update(cache, { data: { addComment } }) {
      try {
        // First we retrieve existing profile data that is stored in the cache under the `QUERY_PROFILES` query
        // Could potentially not exist yet, so wrap in a try/catch
        const { twits } = cache.readQuery({ query: QUERY_TWITS });

        const twitIndex = twits.findIndex(
          (twit) => twit.id === addComment.twitId
        );

        if (twitIndex !== -1) {
          const updatedTwit = {
            ...twits[twitIndex],
            comments: [addComment, ...twits[twitIndex].comments],
          };

          // Then we update the cache by combining existing profile data with the newly created data returned from the mutation
          cache.writeQuery({
            query: QUERY_TWITS,
            // If we want new data to show up before or after existing data, adjust the order of this array
            data: {
              twits: [
                [
                  ...twits.slice(0, twitIndex),
                  {
                    ...twits[twitIndex],
                    comments: updatedComments,
                  },
                  ...twits.slice(twitIndex + 1),
                ],
              ],
            },
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [commentText, setCommentText] = useState('');

  const handleShowTextAreaClick = () => {
    setShowTextArea(!showTextArea);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const { data } = await addCommentMutation({
      variables: {
        userId: getUser().data._id,
        username: getUser().data.username,
        commentText: commentText,
        twitId: twitId,
      },
    });
    console.log(data);
  };

  const handleTextAreaChange = (event) => {
    const { value } = event.target;
    setCommentText(value);
  };

  return (
    <>
      <button onClick={handleShowTextAreaClick}>
        {showTextArea ? '-' : '+'}
      </button>
      {showTextArea && (
        <div className="input-group">
          <span className="input-group-text">Write Comment Here:</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={handleTextAreaChange}
          />
          <button onClick={handleCommentSubmit}>COMMENT</button>
        </div>
      )}
    </>
  );
};

export default AddComment;
