const { User, Store, Category, Mark, Product, Favorite } = require("../db")
const productosJson = require("../../productos.json")

const createMarksJSON = async (req, res) => {
  try {
    let markTitles = []

    productosJson.products.forEach(product => {
      product.mark.forEach(mark => {
        if (!markTitles.includes(mark)) {
          markTitles.push(mark)
        }
      })
    })

    const marks = await Promise.all(
      markTitles.map(async title => {
        const [mark, created] = await Mark.findOrCreate({
          where: { title },
          defaults: { title },
        })
        return mark
      })
    )

    return res.status(200).json(marks)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const getMarks = async (req, res) => {
  try {
    let marks = await Mark.findAll()
    return res.status(200).json(marks)
  } catch (error) {
    return res.status(404).send(error)
  }
}

const createMark = async () => {
  try {
    await Mark.bulkCreate(mark)
    return "Se crearon juegos y mandos"
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createMark,
  getMarks,
  createMarksJSON,
}
