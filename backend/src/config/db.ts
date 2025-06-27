import { DataSource } from 'typeorm';
import ENV from './env';

import User from '@entities/user.entity';
import UserProfile from '@entities/user-profile.entity';
import Post from '@entities/post.entity';
import PostPhoto from '@entities/post-photo.entity';

const isDev = ENV.NODE_ENV === 'development';

const developmentOptions = {
	logging: false,
	entities: [User, UserProfile, Post, PostPhoto],
};

const dataSource = new DataSource({
	type: 'better-sqlite3',
	database: ENV.DATABASE_URL,
	synchronize: isDev,
	...(isDev ? developmentOptions : {}),
});

export default dataSource;
