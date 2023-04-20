import "./Twit.css"

function Twit(props) {return(
    <div className="twit">
        <p><b>@{props.username}:</b> {props.twit}</p>
        <div>
            <div><img/></div>
        </div>
    </div>
)};

export default Twit;
