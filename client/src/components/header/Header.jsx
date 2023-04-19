import logo from "./assets/logo.jpg"
import header from "./header.css"

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US", options);

console.log(date);

function Header() {return(
    <div>
        <header>
            <h1>Tweeter</h1>
            <p>{date}</p>
            <img src={logo}/>
        </header>
    </div>
)};

export default Header;
