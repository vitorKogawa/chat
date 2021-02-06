import * as express from "express"
import UserController from "../../controllers/UserController"
import authenticationRoutes from "./authention.routes"
import userRoutes from "./user.routes"

const sharedRoutes  = express.Router()

sharedRoutes.use("/auth", authenticationRoutes)
sharedRoutes.use("/user", userRoutes)

export default sharedRoutes