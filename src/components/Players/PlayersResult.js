import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../queries/getUserInfo';
import { BattleCardsWrapper, 
    BattleCards, 
    Player,
    PlayerAvatar,
    PlayerText,
    PlayerResults,
    Result,
    ButtonBattle
    } 
from '../StyledComponents';

function PlayersResult(props) {
    const [player1Result, setPlayer1Result] = useState(0);
    const [player2Result, setPlayer2Result] = useState(0);
    return(
        <div>
            <BattleCardsWrapper>
                <Query query={GET_USER_INFO} variables={ {login: props.player1} }>
                    {( {loading, error, data} ) => {

                        setPlayer1Result(data.user.repositories.totalCount * data.user.followers.totalCount);
                        
                        return (
                            <BattleCards>
                                {player1Result >= player2Result ? 
                                <Player>{`Winner: ${player1Result} points`}</Player>
                                : <Player>{`Loser: ${player1Result} points`}</Player>}
                                <Player>{`@${data.user.login}`}</Player>
                                <PlayerAvatar src={data.user.avatarUrl} />
                                <PlayerText>{data.user.name}</PlayerText>
                                <PlayerResults>
                                    <Result>{`Followers: ${data.user.followers.totalCount}`}</Result>
                                    <Result>{`Following: ${data.user.following.totalCount}`}</Result>
                                    <Result>{`Public Repos: ${data.user.repositories.totalCount}`}</Result>
                                </PlayerResults>
                            </BattleCards>
                        )
                    }}
                </Query>
                <Query query={GET_USER_INFO} variables={ {login: props.player2} }>
                    {( {loading, error, data} ) => {

                        setPlayer2Result(data.user.repositories.totalCount * data.user.followers.totalCount);

                        return (
                            <BattleCards>
                                {player2Result >= player1Result ? 
                                <Player>{`Winner: ${player2Result} points`}</Player>
                                : <Player>{`Loser: ${player2Result} points`}</Player>}
                                <Player>{`@${data.user.login}`}</Player>
                                <PlayerAvatar src={data.user.avatarUrl} />
                                <PlayerText>{data.user.name}</PlayerText>
                                <PlayerResults>
                                    <Result>{`Followers: ${data.user.followers.totalCount}`}</Result>
                                    <Result>{`Following: ${data.user.following.totalCount}`}</Result>
                                    <Result>{`Public Repos: ${data.user.repositories.totalCount}`}</Result>
                                </PlayerResults>
                            </BattleCards>
                        )
                    }}
                </Query>            
            </BattleCardsWrapper>
            <ButtonBattle onClick={props.reset}>Another battle!</ButtonBattle>
        </div>
    )
}

export default PlayersResult;