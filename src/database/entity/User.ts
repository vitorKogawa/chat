import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany, ManyToMany, JoinTable} from "typeorm";
import * as bcryptjs from "bcryptjs"
import { Message } from "./Message";
import { Talk } from "./Talk";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    isEnabled: number;

    @Column()
    isAdm: number;

    @OneToMany(() => Message, message => message.user)
    message: Message[]

    @ManyToMany(() => Talk)
    @JoinTable({name: "user_talk"})
    talks: Talk[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcryptjs.hashSync(this.password, 10)
    }
}
