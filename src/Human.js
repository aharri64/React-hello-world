// * My functional component

function Human(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>They live in {props.location}</h3>
        </div>
    )
}

export default Human;
