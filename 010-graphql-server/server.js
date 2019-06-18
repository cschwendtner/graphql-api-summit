const { ApolloServer, gql, ApolloError } = require('apollo-server');
const { fakedb } = require('./fake-db');


const typeDefs = gql`
  type Query {
      hello: String
      books(first: Int): [Book]
      book(id: Int!): Book
      authors: [Author]
  }

  type Book {
      """ the id of the book """
      id: Int!
      title: String
      author: Author!

      # this is a comment
  }

  type Author {
      id: Int!
      firstName: String
      lastName: String
  }
`;

const resolvers = {
    Query: {
        hello: () => "world",

        books: (_, { first }, { db }) => db.getBooks(first),

        book: (_, { id }, { db }) => db.getBookById(id),

        authors: (_, __, { db }) => db.getAuthors()


    },

    Book: {
        // id: (book) => book.id,
        // title: (book) => book.title + "test",
        
        author: (book, _, { db }) => {
            // throw new ApolloError('uuuups', 'ERR112');
            return db.getAuthorById(book.authorId);
        }
    }

};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            db: fakedb
        };
    }
});

server.listen().then(( { url }) => {
    console.log(`Server running at ${url}`);
});