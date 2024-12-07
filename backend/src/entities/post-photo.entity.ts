import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Post from './post.entity';

@ObjectType()
@Entity()
export default class PostPhoto {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column({ type: 'varchar' })
	url: string;

	@Field(() => Post)
	@ManyToOne(() => Post, (post) => post.photos, { onDelete: 'CASCADE' })
	post: Post;
}
