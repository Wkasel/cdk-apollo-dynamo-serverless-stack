import { gql, ApolloServer } from "apollo-server-lambda";


import Note from "./Note";
import listNotes from "./listNotes";
import createNote from "./createNote";
import updateNote from "./updateNote";
import deleteNote from "./deleteNote";
import getNoteById from "./getNoteById";

const IS_LOCAL = !!process.env.IS_LOCAL;



const typeDefs = gql`
  type Note {
    id: ID!
    content: String
  }
  input CreateNoteInput {
    id: ID!
    content: String!
  }
  input UpdateNoteInput {
    id: ID!
    content: String!
  }
  input DeleteNoteInput {
    id: ID!
  }

  type Query {
    hello: String
    getNoteById(id: ID): Note
    listNotes:[Note]
  }
  type Mutation {
    createNote(note:CreateNoteInput!):Note
    updateNote(note:UpdateNoteInput!):Note
    deleteNote(note:DeleteNoteInput!):String
  }
`;




const resolvers = {
  Query: {
    hello: () => "Hello, New World!",
    getNoteById: (
      parent: undefined,
      args: {
        note: {
          id: string
        }
      },
    ) => getNoteById(args.note.id),
    listNotes: () => listNotes()
  },
  Mutation: {
    createNote: (
      parent: undefined,
      args: { note: Note },

    ) => createNote(args.note),
    updateNote: (
      parent: undefined,
      args: { note: Note },
    ) => updateNote(args.note),
    deleteNote: (
      parent: undefined,
      args: { note: Note },
    ) => deleteNote(args.note.id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IS_LOCAL,
  introspection: IS_LOCAL,
});

export const handler = server.createHandler();
