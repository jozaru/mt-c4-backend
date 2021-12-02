import { gql } from 'apollo-server';

const roleType = gql `
  type Role {
    code: String!
    value: String!
  }
`;

const miscQueries = gql`
  type Query {
    roles: [Role]
  }
`;

export default [
  roleType,
  miscQueries,
]
