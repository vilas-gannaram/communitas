import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@as-integrations/express5';

import express from 'express';
import http from 'http';
import cors from 'cors';

import { buildSchema } from 'type-graphql';

import ENV from './config/env';
import dataSource from './config/db';
import resolvers from './resolvers';

// Connect to the database
dataSource
	.initialize()
	.then(() => {
		console.log('Connected to database');
	})
	.catch((e) => {
		console.log('Failed to connect to database', e);
		throw new Error(e);
	});

const schema = await buildSchema({
	resolvers,
	// emitSchemaFile: true,
	// validate: false,
	// validateNonNullInput: true,
	// globalMiddlewares: [
	//   async (context, next) => {
	//     // Add your middleware logic here
	//     console.log('Middleware executed');
	//     await next();
	//   },
	// ],
	// authChecker: async (context) => {
	//   // Add your authentication logic here
	//   console.log('Authentication check executed');
	//   return true; // Replace with your authentication logic
	// },
});

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
	schema,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
	'/graphql',
	cors<cors.CorsRequest>(),
	express.json(),
	// expressMiddleware accepts the same arguments:
	// an Apollo Server instance and optional configuration options
	expressMiddleware(server, {
		context: async ({ req }) => ({ req }),
	})
);

// Modified server startup
await new Promise<void>((resolve) =>
	httpServer.listen({ port: ENV.PORT }, resolve)
);

console.log(`🚀 Server ready at http://localhost:${ENV.PORT}/`);
