import { ObjectType, Field, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class UserProfile {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column({ type: 'varchar' })
	first_name: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	last_name: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	bio: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	thumbnail: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	profile_pic: string;

	@Field(() => String)
	@Column({ type: 'varchar' })
	cover_pic: string;
}
