import 'reflect-metadata';
import { MiddlewareFn } from 'type-graphql';
import jwt from 'jsonwebtoken';
import type TContext from '@customTypes/context.type';
import CustomError from '@utils/custom.error';

export const authMiddleware: MiddlewareFn<TContext> = async (
	{ context },
	next
) => {
	const authHeader = context.req.headers['authorization'];

	if (!authHeader)
		throw CustomError.unauthorized('Authorization header is missing');

	const token = authHeader.split(' ')[1];
	if (!token) throw CustomError.unauthorized('No token provided');

	try {
		const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);

		context.userId = (payload as jwt.JwtPayload).userId;
	} catch (err) {
		throw CustomError.unauthorized('Not authenticated');
	}

	return next();
};

export default authMiddleware;
