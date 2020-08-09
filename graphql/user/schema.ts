import { gql } from "./../deps.ts";

export const types = gql(`
type User {
  firstName: String
  lastName: String
}

input UserInput {
  firstName: String
  lastName: String
}

type ResolveType {
  done: Boolean
}

type Query {
  getUser(id: String): User 
}

type Mutation {
  setUser(input: UserInput!): ResolveType!
}
`);