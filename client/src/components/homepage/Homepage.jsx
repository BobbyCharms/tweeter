import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TWITS } from '../../utils/queries';
import AddTwit from '../../twit/addTwit';
import { ADD_TWIT } from '../../utils/mutations';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_TWITS);
  const twits = data?.twits || [];
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
          data: { twits: [...twits, addTwit] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [twitText, setTwitText] = useState('');

  console.log("homepage addtwit error", error)
  return (
    <>
      {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <AddTwit addTwitMutation={addTwitMutation} twitText={twitText} setTwitText={setTwitText}/>
            <ManyTwits twits={twits} />
          </>
        )}
    </>
  )
};

export default Homepage;
