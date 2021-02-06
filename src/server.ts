import *as express from "express"
import app from "./app"
import "./config/env"

const server = express()
server.use(app)
const port = process.env.PORT || 3333

server.listen(port, () => console.log("Server URL: http://localhost:" + port))