import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryColumn, ObjectIdColumn, ObjectID } from "typeorm";
import { Transform } from "class-transformer/decorators";

@Entity('news')
export class News extends BaseEntity {
    @ObjectIdColumn()
    @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
    id: ObjectID;

    @Column({ type: 'varchar', length: 200, nullable: true })
    comment_text: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    title: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    url: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    author: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    objectID: string;

    @Column({ nullable: true })
    created_at_i: number;

    @Column({ nullable: true })
    created_at: string;

    @Column({ nullable: true })
    points: number;

    @Column({ nullable: true })
    num_comments: number;

    @Column({ nullable: true })
    parent_id: number;

    @Column({ nullable: true })
    story_id: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    story_text: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    status: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    story_title: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    story_url: string;

    @Column({ nullable: true })
    _tags: [string];

    @Column({ nullable: true })
    _highlightResult: {};
}