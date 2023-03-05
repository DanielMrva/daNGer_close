import { gql } from 'apollo-angular';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(
            username: $username,
            email: $email,
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_ENCOUNTER = gql`
    mutation saveEncounter(
        $description: String!
        $encType: String!
        $category: [String!]
        $date: String
        $lat: Float!
        $lng: Float!
        $title: String!
        $encounterUser: String
        $userId: ID
    ) {
        saveEncounter(
            description: $description
            encType: $encType
            category: $category
            date: $date
            lat: $lat
            lng: $lng
            encounterUser: $encounterUser
            userId: $userId
        ) {
            _id
            description
            encType
            category
            date
            lat
            lng
            encounterUser
            userId {
                _id
            }
        }
    }
`

export const ADD_COMMENT = gql`
    mutation saveComment(
        $commentText: String
        $commentUser: String
        $encounterId: ID
        $userId: ID
    ) {
        saveComment(
            commentText: $commentText
            commentUser: $commentUser
            encounterId: $encounterId
            userId: $userId
        ) {
            _id
            commentText
            createdAt
            commentUser
            userId {
                _id
            }
            encounterId {
                _id
            }
        }
    }
`