export const schema = gql`
  type Medecine {
    id: Int!
    name: String!
    code: String!
    description: String!
    price: String!
    expirydate: DateTime
    stock: Int
    image: String
  }

  type Query {
    medecines: [Medecine!]! @requireAuth
    medecine(id: Int!): Medecine @requireAuth
  }

  input CreateMedecineInput {
    name: String!
    code: String!
    description: String!
    price: String!
    expirydate: DateTime
    stock: Int
    image: String
  }

  input UpdateMedecineInput {
    name: String
    code: String
    description: String
    price: String
    expirydate: DateTime
    stock: Int
    image: String
  }

  type Mutation {
    createMedecine(input: CreateMedecineInput!): Medecine! @requireAuth
    updateMedecine(id: Int!, input: UpdateMedecineInput!): Medecine!
      @requireAuth
    deleteMedecine(id: Int!): Medecine! @requireAuth
  }
`
