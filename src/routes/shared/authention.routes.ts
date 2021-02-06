import * as express from "express"
import AuthController from "../../controllers/AuthController"

const authenticationRoutes = express.Router()

authenticationRoutes.post("/login", AuthController.auth)

export default authenticationRoutes