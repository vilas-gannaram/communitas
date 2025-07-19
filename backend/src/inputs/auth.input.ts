import 'reflect-metadata';
import { InputType, Field } from 'type-graphql';

@InputType()
export default class LoginInput {
	@Field(() => String)
	email: string;

	@Field(() => String)
	password: string;
}
