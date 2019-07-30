import styled from 'styled-components';

export const BattleWrapper = styled.div`
    align-content: center;
    text-align: center;
    padding-top: 25%;
`;

export const BattleTitle = styled.h1`
    font-weight: bold;
    text-align: center;
`;

export const ButtonBattle = styled.button`
    background-color: black;
    font-size: 25px;
    color: white;
    text-align: center;
    self-align: center;
    border-radius: 5px;
    border: none;
    box-shadow: ofset 2px;
    height: 50px;
    width: 250px;
    
    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;