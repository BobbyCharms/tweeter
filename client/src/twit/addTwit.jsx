import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TWIT } from '../utils/mutations';
import ManyTwits from '../../twit/manyTwits';

const addTwit = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [addTwitMutation, { loading }] = useMutation(ADD_TWIT);

  const handleShowTextAreaClick = () => {
    setShowTextArea(!showTextArea);
  };

  const newTwit = () => {
    addTwitMutation({ variable: { twitText: 'Your new twit here.' } });
  };

  return (
    <>
      <button onClick={handleShowTextAreaClick}>
        {showTextArea ? '-' : '+'}
      </button>
      {showTextArea && (
        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control" aria-label="With textarea" />
        </div>
      )}
    </>
  );
};

export default addTwit;
