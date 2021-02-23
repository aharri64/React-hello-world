// * My functional component
import Player from "./Player";

function Human(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>They live in {props.location}</h3>
            <Player position="forward"/>
        </div>
    )
}

export default Human;
