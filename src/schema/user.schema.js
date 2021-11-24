import { gql } from 'apollo-server';

const userType = gql`
  # User
  type User {
    _id: ID!
    email: String!
    documentId: Float!
    name: String!
    lastName: String!
    fullName: String!
    role: Role!
    status: userStatus!
  }
`;

const enums = gql`
  # Enum for role values
  enum Role {
    ADMIN
    LEADER
    STUDENT
  }

  # Enum for status values
  enum userStatus {
    PENDING
    AUTHORIZED
    UNAUTHORIZED
  }
`;

const queries = gql`
  # Query all users
  type Query {
    allUsers: [User]
  }

  type Query {
    user(_id: ID): User
  }
`;

const mutations = gql`
  type Mutation {
    addUser(input: AddUserInput!): User
  }
`;

const inputs = gql`
  input AddUserInput {
    email: String!
    documentId: Float!
    name: String!
    lastName: String!
    fullName: String!
    role: Role!
    status: userStatus!
    password: String!
  }
`;

export default [
  userType,
  enums,
  queries,
  mutations,
  inputs,
];
