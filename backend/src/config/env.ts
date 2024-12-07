import dotenv from 'dotenv';

dotenv.config();

// Validate required environment variables
if (!process.env.DATABASE_URL) {
	throw new Error('Missing DATABASE_URL environment variable');
}
if (!process.env.PORT) {
	throw new Error('Missing PORT environment variable');
}

const ENV = {
	DATABASE_URL: process.env.DATABASE_URL,
	PORT: parseInt(process.env.PORT, 10),
};

export default ENV;
