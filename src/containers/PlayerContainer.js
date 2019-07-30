import React, { useState } from 'react';
import Battle from '../components/Battle/Battle';
import Player1Query from '../components/Players/Player1Query';
import Player2Query from '../components/Players/Player2Query';
import Player1 from '../components/Players/Player1';
import Player2 from '../components/Players/Player2';
import { ButtonBattle, BattleCardsWrapper } from '../components/StyledComponents';
import PlayersResult from '../components/Players/PlayersResult';

function PlayerContainer() {
    const [isSubmited, setSubmitStatus] = useState(false);
    const [isSubmited2, setSubmit2Status] = useState(false);
    const [Player1Data, setPlayer1] = useState('');
    const [Player2Data, setPlayer2] = useState('');
    const [fightStatus, setFightStatus] = useState(false);

    function handleSubmitClick(player, data) {
        switch(player) {
            case 1:
                setSubmitStatus(true);
                setPlayer1(data);
                break;
            case 2: 
                setSubmit2Status(true);
                setPlayer2(data);
                break;
            default:
                return null;
        }
    }

    function Reset(player) {
        switch(player) {
            case 1:
                setSubmitStatus(false);
                setPlayer1('');
                break;
            case 2:
                setSubmit2Status(false);
                setPlayer2('');
                break;
            default:
                return null;
        }
    }

    function changeFightStatus() {
        setFightStatus(true);
        setSubmitStatus(false);
        setSubmit2Status(false);
    }

    function resetBattle() {
        setFightStatus(false);
    }

    if(!isSubmited && !isSubmited2 && !fightStatus) { 
        return(
            <div>
                <Battle handleClick={handleSubmitClick} submit1={isSubmited} submit2={isSubmited2}/>
            </div>
        )
    }
    if(isSubmited && !isSubmited2 && !fightStatus) {
        return(
            <BattleCardsWrapper>
                <Player1Query player={Player1Data} reset={Reset}/>
                <Player2 handleClick={handleSubmitClick}/>
            </BattleCardsWrapper>
        )
    }
    if(!isSubmited && isSubmited2 && !fightStatus) {
        return(
            <BattleCardsWrapper>
                <Player1 handleClick={handleSubmitClick} />
                <Player2Query player={Player2Data} reset={Reset}/>
            </BattleCardsWrapper>
        )
    }
    if(isSubmited && isSubmited2 && !fightStatus) {
        return(
            <div>
                <BattleCardsWrapper>
                    <Player1Query player={Player1Data} reset={Reset}/>
                    <Player2Query player={Player2Data} reset={Reset}/>
                </BattleCardsWrapper>
                <ButtonBattle onClick={changeFightStatus}>Battle!</ButtonBattle>
            </div>
        )
    }
    if(!isSubmited && !isSubmited2 && fightStatus) {
        return(
            <PlayersResult player1={Player1Data} player2={Player2Data} reset={resetBattle}/>
        )
    }
}

export default PlayerContainer;