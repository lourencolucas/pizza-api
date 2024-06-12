const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getPizzas = async (request, reply) => {
  const pizzas = await prisma.pizza.findMany()
  return pizzas
}

const createPizza = async (request, reply) => {
  const { name, ingredients, price } = request.body
  const pizza = await prisma.pizza.create({
    data: { name, ingredients, price }
  })
  return pizza
}

const updatePizza = async (request, reply) => {
  const { id } = request.params
  const { name, ingredients, price } = request.body
  const pizza = await prisma.pizza.update({
    where: { id: id }, // Trata o id como string
    data: { name, ingredients, price }
  })
  return pizza
}

const deletePizza = async (request, reply) => {
  const { id } = request.params
  await prisma.pizza.delete({
    where: { id: id } // Trata o id como string
  })
  return { message: 'Pizza deleted successfully' }
}

module.exports = {
  getPizzas,
  createPizza,
  updatePizza,
  deletePizza
}
