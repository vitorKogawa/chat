import {EntityRepository, Repository} from "typeorm";
import { Talk } from "../database/entity/Talk";
import { User } from "../database/entity/User";

@EntityRepository(Talk)
class TalkRepository extends Repository<Talk> {
    async talkExists(userA: User, userB: User){
        try {
            const talkExists = await this.find({
                where: [
                    {  }
                ]
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export { TalkRepository }