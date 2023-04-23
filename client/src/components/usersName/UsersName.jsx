import { getToken, getUser } from '../../utils/auth';
import './UsersName.css'

function UsersName() { 
    const user = getUser();
    console.log(user);
    return(
    <div>
        <p><em>Welcome, {user.data.username}!</em></p>
    </div>
)};

export default UsersName;
