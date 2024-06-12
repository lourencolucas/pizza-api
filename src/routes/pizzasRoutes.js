const pizzasController = require('../controllers/pizzasController')

async function pizzasRoutes(fastify, options) {
  fastify.get('/pizzas', pizzasController.getPizzas)
  
  fastify.route({
    method: 'POST',
    url: '/pizzas',
    preHandler: fastify.basicAuth,
    handler: pizzasController.createPizza
  })

  fastify.route({
    method: 'PUT',
    url: '/pizzas/:id',
    preHandler: fastify.basicAuth,
    handler: pizzasController.updatePizza
  })

  fastify.route({
    method: 'DELETE',
    url: '/pizzas/:id',
    preHandler: fastify.basicAuth,
    handler: pizzasController.deletePizza
  })
}

module.exports = pizzasRoutes
