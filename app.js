import config from "config"
import express from "express"

import * as router from "./routers/my-router"

const app = express()
const serviceName= config.service.name
const port = config.service.port || 3000

router.registerRoutesAndMiddleware(app)

app.listen(port, () => {
  let startedMessage = `Service ${serviceName} started on port ${port}.`
  console.log(startedMessage);
})

module.exports = app
