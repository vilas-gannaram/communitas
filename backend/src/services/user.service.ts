import dataSource from '@config/db';
import User from '@entities/user.entity';

import { CreateUserInput } from '@resolvers/user.resolver';

const userRepository = dataSource.getRepository(User);

export default class UserService {
	static async findUsers(): Promise<User[]> {
		return userRepository.find();
	}

	static async findById(id: number): Promise<User | null> {
		return userRepository.findOne({ where: { id } });
	}

	static async createUser(user: CreateUserInput): Promise<User | null> {
		const newUser = userRepository.create(user);
		return await userRepository.save(newUser);
	}
}
