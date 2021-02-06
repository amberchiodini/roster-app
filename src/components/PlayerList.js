import { playerData } from "../data/playerData";
import Player from './Player'

function PlayerList(props) {
    console.log('props', props)

    //create a list of Player components
    const players = props.players.map((player) => {
        return (
            <Player
                firstName={player.firstName}
                jerseyNumber={player.jerseyNumber}
                hobbies={player.hobbies}
            />
        )
    })
    return (
        <div>
            {players}
        </div>
    )
}

export default PlayerList;