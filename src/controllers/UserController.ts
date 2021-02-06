import { Request, Response } from "express"
import { UserRepository } from "../repositories/UserRepository"
import { getCustomRepository } from "typeorm"

class UserController {
    async index(request: Request, response: Response){
        const userRepository = getCustomRepository(UserRepository)
        try {
            const users = await userRepository.allUsers()
            if(users !== false)
                return response.status(200).json(users)
            return response.sendStatus(400)
        } catch (error) {
            console.error(error)
            return response.sendStatus(500)
        }
    }

    async create(request: Request, response: Response)
    {
        const userRepository = getCustomRepository(UserRepository)
        const { username, password } = request.body
        const dataUser = { username, password }
        try {
            const userIsValid = await userRepository.usernameIsValid(username)
            if (userIsValid) {
                await userRepository.createUser(dataUser.username, dataUser.password)
                return response.status(200).json(dataUser)
            } else {
                return response.status(409).json({ message: "Dados inválidos" })
            }
        } catch (error) {
            console.error(error)
        }
    }

    async changeStatus(request: Request, response: Response)
    {
        const userRepository = getCustomRepository(UserRepository)
        const { id, status } = request.body

        try {
            if(userRepository.changeStatus(id, status)){
                return response.sendStatus(200)
            }else{
                return response.sendStatus(400)
            }
        } catch (error) {
            return response.sendStatus(500)
        }
    }
}

export default new UserController()