// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { BookResolvers } from "../generated/graphqlgen";

export const Book: BookResolvers.Type = {
  ...BookResolvers.defaultResolvers,

  author: (parent, args, ctx) => {
    return { id: 1, firstName: 'Hugo', lastName: 'Meier' };
  }
};
