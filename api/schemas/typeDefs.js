const { graphql, buildschema } = require('graphql');

const typeDefs = `#graphql
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    encounters: [Encounter]
    comments: [Comment]
    friends: [User]
  }

  type Encounter {
    _id: ID!
    description: String!
    encType: String!
    category: [String!]
    date: String
    lat: Float!
    lng: Float!
    createdAt: String
    title: String!
    encounterUser: String
    userId: User
    commentId: [Comment]
    corroborations: [ID]
  }

  type Comment {
    _id: ID!
    commentText: String
    createdAt: String
    commentUser: String
    userId: User
    encounterId: Encounter
    corroborations: [ID]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type UserFriendsEncounters {
    _id: ID
    username: String
    Friends_Encounters: [Encounter] 
  }

  type Query {
    me(_id: String!): User
    users: [User] #Used | Technically? REF Test.js in ceClassic Test.js, which may be a non-used component
    user(userId: ID!): User
    singleUser(email: String!): User
    allEncounters: [Encounter] #Used |
    encounters(username: String): [Encounter]
    encounter(encounterId: ID!): Encounter
    visEncounters(
      lowlat: Float!
      hilat: Float!
      lowlng: Float!
      hilng: Float!
    ): [Encounter] #Used ||
    encounterComments(encounterId: String!): [Comment] #Used ||
    userComments(userId: ID!): [Comment]
    allComments: [Comment]
    oneComment(commentId: ID!): Comment
    friendsEncounters(userId: ID!): UserFriendsEncounters
  }
  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      profilepic: String
    ): Auth
    login(email: String!, password: String!): Auth
    saveEncounter(
      encounterUser: String
      title: String
      description: String
      type: String
      category: [String]
      date: String
      lat: Float
      lng: Float
      userId: ID
    ): Encounter
    removeEncounter(encounterId: ID!): Encounter
    saveComment(
      commentText: String
      commentUser: String
      encounterId: ID
      userId: ID
    ): Comment
    corroborateEncounter(encounterId: ID!, userId: ID!): Encounter
    corroborateComment(commentId: ID!, userId: ID!): Comment
  }
`;

module.exports = typeDefs;