import { getToken, getUser } from '../../utils/auth';

function UsersName() { 
    const user = getUser();
    console.log(user);
    return(
    <div>
        <p>Welcome, {user.data.username}!</p>
    </div>
)};

export default UsersName;
