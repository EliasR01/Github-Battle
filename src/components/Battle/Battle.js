import React from 'react';
import Player1 from '../Players/Player1';
import Player2 from '../Players/Player2';
import { BattleCardsWrapper } from '../StyledComponents';


function Battle(props) {

    return (
        <BattleCardsWrapper>
            {!props.isSubmit ? <Player1 handleClick={props.handleClick}/> : null}
            {!props.isSubmit2 ? <Player2 handleClick={props.handleClick}/> : null}
        </BattleCardsWrapper>
    )
}

export default Battle;