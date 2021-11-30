import { gql } from 'apollo-server';

const roleType = gql`
  # Role
  type Role {
    code: String!
    value: String!
  }
`;

const queries = gql`
  # Query roles
  type Query {
    roles: [Role]
  }
`;

export default [
  roleType,
  queries,
];
