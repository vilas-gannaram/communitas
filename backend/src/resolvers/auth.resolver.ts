import 'reflect-metadata';
import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import AuthPayload from '@customTypes/auth.payload';
import LoginInput from '@inputs/auth.input';
// import AuthService from '@services/auth.service';
// import authMiddleware from '@middlewares/auth.middleware';

@Resolver()
export default class AuthResolver {
	@Mutation(() => AuthPayload)
	async login(
		@Arg('data', () => LoginInput) data: LoginInput
	): Promise<AuthPayload | null> {
		return null;
		const { email, password } = data;
		// return AuthService.login(email, password);
	}

	// @Mutation(() => Boolean)
	// @UseMiddleware(authMiddleware)
	// async logout(): Promise<boolean> {
	// 	console.log('logged out');
	// 	// return AuthService.logout();
	// }

	// @Mutation(() => AuthPayload)
	// async refreshToken(): Promise<AuthPayload> {
	// 	return AuthService.refreshToken();
	// }

	// @Mutation(() => Boolean)
	// async resetPassword(
	// 	@Arg('email') email: string,
	// ): Promise<boolean> {
	// 	return AuthService.resetPassword(email, );
	// }
}
