import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Message } from "./Message";

@Entity()
export class Talk {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Message, message => message.talk)
    message: Message[]

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}
