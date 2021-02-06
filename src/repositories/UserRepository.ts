import {EntityRepository, Repository} from "typeorm";
import {User} from "../database/entity/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
    async usernameIsValid(username: string){
        try {
            const usernameIsValid = await this.find({ where: { username }})
            if (usernameIsValid.length !== 0) {
                return false
            } else {
                return true
            }
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async createUser(username: string, password: string){
        try {
            const newUser = this.create({ username, password, isEnabled: 0, isAdm: 0 })
            await this.save(newUser)
        } catch (error) {
            console.error(error)
            return true
        }
    }

    async changeStatus(id: number, isEnabled: number){
        try {
            const userExists= await this.find({ where: { id } })
            if (userExists) {
                await this.createQueryBuilder()
                .update(User)
                .set({ isEnabled })
                .where("id = :id", { id })
                .execute()  

                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async allUsers(){
        try {
            const data = await this.createQueryBuilder()
            .select(["user.id", "user.username", "user.isEnabled"])
            .from(User, "user")
            .getMany()

            return data
        } catch (error) {
            console.error(error)
            return false
        }
    }
}   

export { UserRepository }