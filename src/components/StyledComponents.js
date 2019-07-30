import styled from 'styled-components';

export const BattleCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
`;

export const BattleCards = styled.div`
    align-content: center;
    padding: 100px 230px;
    margin: 0px auto;
    text-align: center;
`;

export const Player = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 30px;
`;

export const InputPlayer = styled.input`
    border-radius: 5px;
    border: none;
    height: 30px;
`;

export const ButtonPlayer = styled.button`
    display: flex;
    background-color: black;
    color: white;
    text-align: center;
    align-content: center;
    margin-left: 30px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    box-shadow: ofset 2px;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;

export const PlayerText = styled.p`
    font-weight: bold;
    font-size: 15px;
    text-align: center;
`;

export const PlayerResults = styled.div`
    align-content: center;
`;

export const Result = styled.li`
    text-align: center;
    li-style: none;
`;

export const PlayerAvatar = styled.img`
    border-radius: 100%;
    text-aling: center;
    align-content: center;
    width: 100px;
    height: 100px;
`;

export const Reset = styled.a`
    color: red;
    text-align: center;
    cursor: pointer;
`;

export const ButtonBattle = styled.button`
    background-color: black;
    color: white;
    text-align: center;
    font-size: 25px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    margin-left: 550px;
    
    &:hover{
        cursor: pointer;
        background-color: gray;
    }
`;