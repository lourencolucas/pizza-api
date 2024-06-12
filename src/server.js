require('dotenv').config()

const fastify = require('fastify')({ logger: { level: 'error' } })
const pizzasRoutes = require('./routes/pizzasRoutes')
const drinksRoutes = require('./routes/drinksRoutes')
const authPlugin = require('./plugins/auth')

fastify.register(require('@fastify/cors'), {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

fastify.register(authPlugin)

fastify.after(() => {
  fastify.register(pizzasRoutes)
  fastify.register(drinksRoutes)
})

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT, host: '0.0.0.0' })
    fastify.log.info(`Server is running at http://localhost:${process.env.PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

module.exports = start
