import type { NonEmptyArray } from 'type-graphql';

import AuthResolver from './auth.resolver';
import UserResolver from './user.resolver';

const resolvers: NonEmptyArray<Function> = [AuthResolver, UserResolver];

export default resolvers;
