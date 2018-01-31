import config from "config"
import express from "express"
import * as router from "./routers/my-router"
import morgan from "morgan"

const app = express()
const serviceName= config.service.name
const port = config.service.port || 3000

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
router.registerRoutesAndMiddleware(app)

app.listen(port, () => {
  let startedMessage = `Service ${serviceName} started on port ${port}.`
  console.log(startedMessage)
})

module.exports = app
