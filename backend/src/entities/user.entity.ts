import { ObjectType, Field, ID } from 'type-graphql';
import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import UserProfile from './user-profile.entity';
import Post from './post.entity';

@ObjectType()
@Entity()
export default class User {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column({ type: 'varchar' })
	username: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	email: string;

	// @Field(() => String)
	@Column({ type: 'varchar' })
	password: string;

	@Field(() => UserProfile)
	@OneToOne(() => UserProfile)
	@JoinColumn()
	profile: UserProfile;

	@Field(() => [Post])
	@OneToMany(() => Post, (Post) => Post.author, { eager: true, cascade: true })
	posts: Post[];
}
