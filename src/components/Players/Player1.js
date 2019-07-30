import React from 'react';
import { BattleCards, ButtonPlayer, InputPlayer, Player} from '../StyledComponents';

function Player1(props) {
    let textInput1;
    return(
        <BattleCards>
            <Player>Player 1</Player>
            <InputPlayer placeholder="Enter player username" ref={(input) => textInput1=input}/>
            <ButtonPlayer onClick={() => props.handleClick(1, textInput1.value)}>Submit!</ButtonPlayer>
        </BattleCards>
    )
}

export default Player1;