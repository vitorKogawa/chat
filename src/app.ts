import * as express from "express"
import * as cors from "cors"
import routes from "./routes/routes"
import "./database/connection"

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

export default app