import { gql } from 'apollo-angular';

export const QUERY_USERS = gql`
    query users {
        _id
        username
        email
        encounters {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            userId
            commentId
            corroborations
        }
    }
`

export const QUERY_SINGLEUSER = gql`
    query user($userId: String!) {
        user(_id: $userId) {
            _id
            username
            email
        }
    }
`

export const ALL_ENCOUNTERS = gql`
    query allEncounters {
        allEncounters {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            userId {
                username
            }
            commentId {
                commentText
                commentUser
            }
            corroborations
        }
    }
`

export const USER_ENCOUNTERS = gql`
    query userEncounters($encounterUser: String) {
        userEncounters(encounterUser: $encounterUser) {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            userId {
                username
            }
            commentId {
                commentText
                commentUser
            }
            corroborations
        }
    }
`

export const SINGLE_ENCOUNTER = gql`
    query singleEncounter($encounterId: ID!) {
        singleEncounter(_id: $encounterId) {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            userId {
                username
            }
            commentId {
                commentText
                commentUser
            }
            corroborations
        }
    }
`

export const VIS_ENCOUNTERS = gql`
    query visEncounters(
        $lowlat: Float!
        $hilat: Float!
        $lowlng: Float!
        $hilng: Float!
    ) {
        visEncounters(
            lowlat: $lowlat
            hilat: $hilat
            lowlng: $lowlng
            hilng: $hilng
        ) {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            userId {
                username
            }
            commentId {
                commentText
                commentUser
            }
            corroborations
        }
    }
`

export const FRIENDS_ENCOUNTERS = gql`
    query friendsEncounters($userId: ID!) {
        friendsEncounters(userId: $userId) {
            _id
            username
            Friends_Encounters {
            _id
            description
            encType
            category
            date
            lat
            lng
            createdAt
            title
            encounterUser
            commentId {
                commentText
                commentUser
            }
            corroborations

            }
        }
    }
`

export const ENC_COMMENTS = gql`
    query encounterComments($encounterId: String!) {
        encounterComments(encounterId: $encounterId) {
            _id
            commentText
            createdAt
            commentUser
            userId {
                _id
                username
            }
            encounterId {
                _id
            }
            corroborations
        }
    }
`

export const USER_COMMENTS = gql`
    query userComments($userId: ID!) {
        userComments(userId: $userId) {
            commentText
            createdAt
            commentUser
            userId {
               _id
            }
            encounterId {
              _id
            }
            corroborations
        }
    }
`

export const ALL_COMMENTS = gql`
    query allComments {
        allComments {
            commentText
            createdAt
            commentUser
            userId {
               _id
            }
            encounterId {
              _id
            }
            corroborations
        }
    }
`

export const SINGLE_COMMENT = gql`
    query onceComment($commentId: ID!) {
        onceComment(_id: $commentId) {
            commentText
            createdAt
            commentUser
            userId {
               _id
            }
            encounterId {
              _id
            }
            corroborations
        }
    }
`