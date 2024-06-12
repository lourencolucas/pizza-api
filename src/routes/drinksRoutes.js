const drinksController = require('../controllers/drinksController')

async function drinksRoutes(fastify, options) {
  fastify.get('/drinks', drinksController.getDrinks)
  
  fastify.route({
    method: 'POST',
    url: '/drinks',
    preHandler: fastify.basicAuth,
    handler: drinksController.createDrink
  })

  fastify.route({
    method: 'PUT',
    url: '/drinks/:id',
    preHandler: fastify.basicAuth,
    handler: drinksController.updateDrink
  })

  fastify.route({
    method: 'DELETE',
    url: '/drinks/:id',
    preHandler: fastify.basicAuth,
    handler: drinksController.deleteDrink
  })
}

module.exports = drinksRoutes
