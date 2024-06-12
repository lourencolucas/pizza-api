const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getDrinks = async (request, reply) => {
  const drinks = await prisma.drink.findMany()
  return drinks
}

const createDrink = async (request, reply) => {
  const { name, size, price } = request.body
  const drink = await prisma.drink.create({
    data: { name, size, price }
  })
  return drink
}

const updateDrink = async (request, reply) => {
  const { id } = request.params
  const { name, size, price } = request.body
  const drink = await prisma.drink.update({
    where: { id: id }, // Trata o id como string
    data: { name, size, price }
  })
  return drink
}

const deleteDrink = async (request, reply) => {
  const { id } = request.params
  await prisma.drink.delete({
    where: { id: id } // Trata o id como string
  })
  return { message: 'Drink deleted successfully' }
}

module.exports = {
  getDrinks,
  createDrink,
  updateDrink,
  deleteDrink
}
