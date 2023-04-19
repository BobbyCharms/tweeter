import logo from "./assets/logo.jpg"
import "./header.css"

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US", options);

console.log(date);

function Header() {return(
    <div>
        <header>
            <div className="brand">
                <h1>Tweeter</h1>
                <div className="picture"><img src={logo}/></div>
            </div>
            <p>{date}</p>
        </header>
    </div>
)};

export default Header;
