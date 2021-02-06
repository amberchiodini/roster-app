function Player(props) {
    const playerConditional = props.hobbies.length ? props.hobbies.map(hobby => {
        return <li key= {props.id}>{hobby}</li>
    })
    :<p>None Listed</p>
    return (
        <div>
            <h3>Player Name: {props.firstName}</h3>
            <p>Jersey Number: {props.jerseyNumber}</p>
            <p>{playerConditional}</p>
        </div>
    )
}

export default Player;

//playerName <h3>
//Add list of hobbies under each player 