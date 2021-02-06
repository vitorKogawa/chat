import * as express from "express"
import UserController from "../../controllers/UserController"

const userRoutes = express.Router()

userRoutes.put("/changeStatus", UserController.changeStatus)
userRoutes.get("/", UserController.index)

export default userRoutes