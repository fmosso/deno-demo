import { GQLError } from "./../deps.ts";


export const resolvers = {
    Query: {
      getUser: (parent: any, { id }: any, context: any, info: any) => {
        console.log("id", id, context);
        if(context.user === "Aaron") {
          throw new GQLError({ type: "auth error in context" })
        }
        return {
          firstName: "wooseok",
          lastName: "lee",
        };
      },
    },
    Mutation: {
      setUser: (parent: any, { input: { firstName, lastName } }: any, context: any, info: any) => {
        console.log("input:", firstName, lastName);
        return {
          done: true,
        };
      },
    },
  };