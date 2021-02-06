import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Talk } from "./Talk";
import { User } from "./User";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @ManyToOne(() => User, user => user.message)
    user: User

    @ManyToOne(() => Talk, talk => talk.message)
    talk: Talk

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}
