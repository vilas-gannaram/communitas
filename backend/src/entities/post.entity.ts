import { ObjectType, Field, ID } from 'type-graphql';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToOne,
} from 'typeorm';
import PostPhoto from './post-photo.entity';
import User from './user.entity';

@ObjectType()
@Entity()
export default class Post {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column({ type: 'varchar' })
	title: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	content: string;

	@Field(() => [PostPhoto])
	@OneToMany(() => PostPhoto, (photo) => photo.post, {
		eager: true,
		cascade: true,
	})
	photos: PostPhoto[];

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
	author: User;
}
