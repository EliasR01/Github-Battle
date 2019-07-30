import React from 'react';
import { BattleWrapper, BattleTitle, ButtonBattle} from './StyledComponents';
import history from '../../History';

function Home() {


    return (
        <BattleWrapper>
            <BattleTitle>Github Battle App, Battle with your friends!</BattleTitle>
            <ButtonBattle onClick={() => {history.push("/Battle")}}>Battle!</ButtonBattle>
        </BattleWrapper>
    )
}

export default Home;