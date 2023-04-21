import React from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_TWITS } from '../../utils/queries';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_TWITS);
  const twits = data?.twits || [];

  return <>{loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}</>;
};

const newTwit = () => {
  //create a new twit
};

// function Homepage() {
//   return (
//     <div>
//       <div>
//         <Link to="/">
//           <p>Homepage</p>
//         </Link>
//         {loggedIn() ? (
//           <button type="button" onClick={() => logout()}>
//             Log out
//           </button>
//         ) : (
//           <Link to="/login">
//             <p>Login</p>
//           </Link>
//           // Link to mytweeter
//         )}
//       </div>
//       <ManyTwits />
//       <button onClick={newTwit}>+</button>
//     </div>
//   );
// }

export default Homepage;
