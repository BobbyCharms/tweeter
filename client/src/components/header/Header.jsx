import logo from './assets/logo.jpg';
import './Header.css';
import UsersName from '../usersName/UsersName';

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
let today = new Date();
let date = today.toLocaleDateString('en-US', options);

console.log(date);

const center = {
  justifyContent: 'center',
  textAlign: 'center',
};

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="brand" style={center}>
          <h1>Tweeter</h1>
          <div className="picture">
            <img src={logo} />
          </div>
        </div>
        <p style={center}>{date}</p>
        <UsersName />
      </header>
    </div>
  );
}

export default Header;
