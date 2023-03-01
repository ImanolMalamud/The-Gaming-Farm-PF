const { Router } = require("express")
const {
  createProductsJSON,
  createProducts,
  getAllProducts,
  modifyProducts,
} = require("../controllers/productControllers")

const router = Router()

router.get("/", async (req, res) => {
  const nombre = req.query.title
  let allprod = await getAllProducts()

  if (nombre) {
    let videogamesName = await allprod.filter(el =>
      el.title.toLowerCase().includes(nombre.toLowerCase())
    )
    videogamesName.length
      ? res.status(200).send(videogamesName.slice(0, 15))
      : res.status(404).send("product not found")
  } else {
    res.status(200).send(allprod)
  }
})

router.post("/db", createProductsJSON)

router.post("/", createProducts)

router.get("/:id", async (req, res) => {
  // res.send("Soy el get /videogame")
  const { id } = req.params
  let allprodById = await getAllProducts()

  if (id) {
    let ProdId = allprodById.filter(e => e.id == id)
    ProdId.length
      ? res.status(200).json(ProdId)
      : res.status(404).send("No existe juego con ese Id")
  }
})

router.put("/products/:id", modifyProducts)

module.exports = router
