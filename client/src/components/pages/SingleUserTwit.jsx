import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_USER_TWITS } from '../../utils/queries';
import ManyTwits from '../../twit/manyTwits';

const SingleUserTwit =  () => {
  
    const { userId } = useParams();
    const { loading, error, data } = useQuery(QUERY_USER_TWITS, {
        variables: { userId: userId },
    });
    if (error) {
        return (
            <div>
                Error
            </div>
        );
    }
    const twits = data?.twits || [];
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ManyTwits
                    twits={twits}
                />
            )}
        </>
    );
};
  
export default SingleUserTwit;