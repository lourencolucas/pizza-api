async function authPlugin(fastify, options) {
    fastify.register(require('@fastify/basic-auth'), {
      validate: async (username, password, req, reply) => {
        if (username !== 'admin' || password !== 'pizza') {
          throw new Error('Invalid credentials')
        }
      },
      authenticate: { realm: 'Pizza and Drinks API' }
    })
  }
  
  module.exports = authPlugin
  