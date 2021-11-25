// vendors
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

// middlewares
import validateAuthentication from './middlewares/authentication.middlewares.js';

// utilities
import connect from './database.js';

// typeDefs
import typeDefs from './schema/index.js';

// resolvers
import resolvers from './resolvers/index.js';

// Initialization
dotenv.config();
connect();

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async ({ req }) => await validateAuthentication(req),
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: process.env.PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers);
