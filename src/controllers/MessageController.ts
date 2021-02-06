import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { MessageRepository } from "../repositories/MessageRepository"

class MessageController {
    async store(request: Request, response: Response){
        const messageRepository = getCustomRepository(MessageRepository)
        try {
            const { message, userA, userB } = request.body
            messageRepository.storeMessage(message, userA, userB)
            return response.sendStatus(200)
        } catch (error) {
            console.error(error)
            return response.sendStatus(500)
        }
    }
}

export default new MessageController()