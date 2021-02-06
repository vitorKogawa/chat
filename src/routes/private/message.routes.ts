import * as express from "express"
import MessageController from "../../controllers/MessageController"

const messageRoutes = express.Router()

messageRoutes.post("/", MessageController.store)

export default messageRoutes