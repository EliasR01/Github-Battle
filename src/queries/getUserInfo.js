import gql from 'graphql-tag';

export const GET_USER_INFO = gql`
    query getUser($login: String!){
        user(login: $login) {
            login
            name
            followers{
                totalCount
            }
            following{
                totalCount
            }
            repositories{
                totalCount
            }
            avatarUrl
        }
    }
`;