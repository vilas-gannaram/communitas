import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
	throw new Error('Missing DATABASE_URL environment variable');
}

if (!process.env.PORT) {
	throw new Error('Missing PORT environment variable');
}

if (!process.env.NODE_ENV) {
	throw new Error('Missing NODE_ENV environment variable');
}

const ENV = {
  NODE_ENV: process.env.NODE_ENV,
	DATABASE_URL: process.env.DATABASE_URL,
	PORT: parseInt(process.env.PORT, 10),
};

export default ENV;
