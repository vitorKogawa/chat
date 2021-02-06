import {EntityRepository, Repository} from "typeorm";
import { Message } from "../database/entity/Message";
import { User } from "../database/entity/User";

@EntityRepository(Message)
class MessageRepository extends Repository<Message> {
    /*
        1 - verificar se a conversa está sendo feita sob as mesmas pessoas (2 pessoas)
        2 - se a conversa entre essas duas pessoas existir , não deve cadastrar outra conversa
        3 - se a conversa entre essas duas pessoas não existir , deve cadastrar uma nova conversa
    */
    async storeMessage(message: string, userA: User, userB: User){
        try {

            // const talksByUserA = await this.createQueryBuilder()
            // .select(["message.talk"])
            // .where("user = :user", { user: userA})
            // .from(Message, "message")
            // .execute()


            // const talksByUserB = await this.createQueryBuilder()
            // .select(["message.talk"])
            // .where("user = :user", { user: userB })
            // .from(Message, "message")
            // .execute()

            const talksByUserA = await this.find({ relations: ["talk"], where: { user: userA } })
            const talksByUserB = await this.find({ relations: ["talk"], where: { user: userB } })

            // console.log(talksByUserA)

            console.log("Talks A: ")
            talksByUserA.map(talk => console.log(talk.talk.id))

            console.log("Talks B: ")
            talksByUserB.map(talk => console.log(talk.talk.id))

            // console.log(talksByUserB)

            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

export { MessageRepository }