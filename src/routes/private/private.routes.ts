import * as express from "express"
import messageRoutes from "./message.routes"
import userRoutes from "./user.routes"

const privateRoutes = express.Router()

privateRoutes.use("/message", messageRoutes)
privateRoutes.use("/user", userRoutes)

export default privateRoutes