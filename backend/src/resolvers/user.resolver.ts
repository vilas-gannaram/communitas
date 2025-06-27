import { Resolver, Query, Mutation, InputType, Arg, Field } from 'type-graphql';

import User from '@entities/user.entity';
import UserService from '@services/user.service';

@Resolver()
export default class UserResolver {
	@Query(() => [User])
	async users(): Promise<User[]> {
		// Fetch users from your database or API
		return [];
	}

	@Query(() => User, { nullable: true })
	async user(@Arg('userId', () => Number) userId: User['id']) {
		// Fetch user from your database or API based on the provided ID
		return null;
	}

	@Mutation(() => User)
	async createUser(
		@Arg('data', () => CreateUserInput) data: CreateUserInput
	): Promise<User | null> {
		return await UserService.createUser(data);
	}
}

@InputType()
export class CreateUserInput {
	@Field(() => String)
	username: string;

	@Field(() => String)
	email: string;

	@Field(() => String)
	password: string;
}
