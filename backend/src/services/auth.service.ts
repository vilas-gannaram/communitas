import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import dataSource from '@config/db';
import User from '@entities/user.entity';
import CustomError from '@utils/custom.error';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

// import { CreateUserInput } from '@resolvers/user.resolver';

const userRepository = dataSource.getRepository(User);

export default class AuthService {}
