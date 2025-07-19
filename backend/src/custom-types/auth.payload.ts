import 'reflect-metadata';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class AuthPayload {
	@Field(() => String)
	accessToken: string;

	@Field(() => String)
	refreshToken: string;

	@Field(() => Int)
	userId: number;
}