import React from 'react';
import { Link } from 'react-router-dom';
import ManyTwits from '../../twit/manyTwits';
import { loggedIn, logout } from '../../utils/auth';

import styles from './Homepage.css?inline';

import { useQuery } from '@apollo/client';
import { QUERY_TWITS } from '../../utils/queries';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_TWITS);
  const twits = data?.twits || [];

  return <>{loading ? <div>Loading...</div> : <ManyTwits twits={twits} />}</>;
};

// const newTwit = () => {
//   //create a new twit
// };

// function Homepage() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <Link to="/" className={styles.link}>
//           <p>Homepage</p>
//         </Link>
//         {loggedIn() ? (
//           <button type="button" onClick={() => logout()}>
//             Log out
//           </button>
//         ) : (
//           <Link to="/login" className={styles.link}>
//             <p>Login</p>
//           </Link>
//         )}
//       </div>
//       <div className={styles.twitsContainer}>
//         <ManyTwits />
//         <button onClick={newTwit} className={styles.newTwitButton}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

export default Homepage;
