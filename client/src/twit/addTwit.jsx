import React, { useState } from 'react';

// import ManyTwits from '../../twit/manyTwits';

const AddTwit = ({ addTwitMutation, twitText, setTwitText }) => {
  const [showTextArea, setShowTextArea] = useState(false);

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

  return (
    <>
      <button onClick={handleShowTextAreaClick}>
        {showTextArea ? '-' : '+'}
      </button>
      {showTextArea && (
        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control" aria-label="With textarea" onChange={setTwitText}/>
          <button onClick={handleTwitSubmit}>TWIT</button>
        </div>
      )}
    </>
  );
};

export default AddTwit;
