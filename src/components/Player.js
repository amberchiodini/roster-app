function Player (props) {
    return (
    <div>
        <h3>Player Name: {props.firstName}</h3>
        <p>Jersey Number: {props.jerseyNumber}</p>
        <ul>Hobbies: <li>{props.hobbies.map(hobby => {
            return (
                <li>{hobby}</li>
            )
            })}</li>
        </ul>
        <hr></hr>
    </div>
    )
}

export default Player;

//playerName <h3>
//Add list of hobbies under each player 