import config from "config"
import { Pool } from "pg"

const serviceName = config.service.name

export function hello(req, res) {
  res.status(200).send(
    { message: `Hello from ${serviceName}!` }
  )
}

export function getQuote(req, res) {
  const pool = new Pool({
    user: config.db.user,
    host: config.db.host,
    database: config.db.dbname,
    password: config.db.password,
    port: config.db.port,
  })

  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

  pool.connect()
    .then(client => {
      return client.query('SELECT quote, category FROM quote ORDER BY RANDOM() LIMIT 1')
        .then(data => {
          client.release()
          res.status(200).send(data.rows[0])
        })
        .catch(e => {
          client.release()
          console.log(err.stack)
        })
    })
  pool.end()
}

export function newQuote(req, res) {
  res.status(200).send(
    { message: `Hello from ${serviceName}!` }
  )
}