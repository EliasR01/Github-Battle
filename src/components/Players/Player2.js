import React from 'react';
import { BattleCards, ButtonPlayer, InputPlayer, Player} from '../StyledComponents';

function Player2(props) {
    let textInput2;
    return(
        <BattleCards>
            <Player>Player 2</Player>
            <InputPlayer placeholder="Enter player username" ref={(input) => textInput2=input}/>
            <ButtonPlayer onClick={() => props.handleClick(2, textInput2.value)}>Submit!</ButtonPlayer>
        </BattleCards>
    )
}

export default Player2;