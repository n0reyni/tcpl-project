export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    password1: String!
    password2: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    password1: String!
    password2: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    password1: String
    password2: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
