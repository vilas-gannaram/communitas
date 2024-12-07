import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
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

const server = new ApolloServer({
	schema,
});

const { url } = await startStandaloneServer(server, {
	listen: {
		port: ENV.PORT,
	},
});

console.log(`🚀  Server ready at: ${url}`);
