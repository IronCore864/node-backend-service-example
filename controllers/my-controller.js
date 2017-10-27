import config from "config"

const serviceName = config.service.name

export function hello(req, res) {
  res.status(200).send(
    { message: `Hello from ${serviceName}!` }
  )
}
