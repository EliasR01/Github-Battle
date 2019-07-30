import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_INFO } from '../../queries/getUserInfo';
import {
    BattleCards, 
    Player,
    PlayerAvatar,
    PlayerText,
    Reset
    } 
from '../StyledComponents';

function Player2Query(props) {
    return (
        <Query query={GET_USER_INFO} variables={ {login: props.player} }>
            {({ loading, error, data }) => {
                if(loading) return <div>Loading...</div>
                if(error) return <div>Error</div>
                return (
                    <BattleCards>
                        <Player>{`@${data.user.login}`}</Player>
                        <PlayerAvatar src={data.user.avatarUrl} />
                        <PlayerText>{data.user.name}</PlayerText>
                        <Reset onClick={() => props.reset(2)}>Reset</Reset>
                    </BattleCards>
                )
            }}
        </Query>
    )
}

export default Player2Query;