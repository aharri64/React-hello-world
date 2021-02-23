// * functional commponent

function Animal(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>They are a {props.animal}</p>
        </div>
    )
}

export default Animal;
