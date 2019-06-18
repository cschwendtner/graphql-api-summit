// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  books: (parent, args, ctx) => {
    return [
      { id: 1, title: 'foo', authorId: 1},
      { id: 2, title: 'foo2', authorId: 2}
    ];
  },

  book: (parent, args, ctx) => {
    return { id: 1, title: 'foo', authorId: 1};
  }
};
