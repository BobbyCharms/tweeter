import { getToken, getUser, loggedIn } from '../../utils/auth';
import './UsersName.css';

function UsersName() {
  let username = 'Guest';
  if (loggedIn()) {
    username = getUser().data.username;
  }

  return (
    <div>
      <p>
        <em>Welcome, {username}!</em>
      </p>
    </div>
  );
}

export default UsersName;
