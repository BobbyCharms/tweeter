import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TWIT } from '../utils/mutations';
import { QUERY_TWITS, QUERY_SINGLE_USER } from '../utils/queries';

// import ManyTwits from '../../twit/manyTwits';

const AddTwit = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [addTwitMutation, { error }] = useMutation(ADD_TWIT, {
    // The update method allows us to access and update the local cache
    update(cache, { data: { addTwit } }) {
      try {
        // First we retrieve existing profile data that is stored in the cache under the `QUERY_PROFILES` query
        // Could potentially not exist yet, so wrap in a try/catch
        const { twits } = cache.readQuery({ query: QUERY_TWITS });

        // Then we update the cache by combining existing profile data with the newly created data returned from the mutation
        cache.writeQuery({
          query: QUERY_TWITS,
          // If we want new data to show up before or after existing data, adjust the order of this array
          data: { twits: [addTwit, ...twits] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [twitText, setTwitText] = useState('');

  const handleShowTextAreaClick = () => {
    setShowTextArea(!showTextArea);
  };

  const handleTwitSubmit = async (event) => {
    event.preventDefault();
    console.log('Anything');
    const { data } = await addTwitMutation({ variables: { twitText } });
    console.log(data);
  };

  // const handleTextAreaChange = () => {

  // }

  console.log('homepage addtwit error', error);

  return (
    <>
      <button onClick={handleShowTextAreaClick}>
        {showTextArea ? '-' : '+'}
      </button>
      {showTextArea && (
        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={(event) => setTwitText(event.target.value)}
          />
          <button onClick={handleTwitSubmit}>TWIT</button>
        </div>
      )}
    </>
  );
};

export default AddTwit;
