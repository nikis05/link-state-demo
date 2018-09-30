export default `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type User {
    id: ID!
    email: String!
  }
`;
