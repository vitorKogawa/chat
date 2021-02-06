import * as express from "express"
import privateRoutes from "./private/private.routes"
import sharedRoutes from "./shared/shared.routes"
import auth_middleware from "../middlewares/auth_middleware"

const routes = express.Router()

routes.use("/shared", sharedRoutes)
// routes.use(auth_middleware)
routes.use("/private", privateRoutes)

export default routes