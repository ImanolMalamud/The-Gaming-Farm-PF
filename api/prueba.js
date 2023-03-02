const productosJson = require("./productos.json")

let markTitles = []

productosJson.products.forEach(product => {
  product.mark.forEach(mark => {
    if (!markTitles.includes(mark)) {
      markTitles.push(mark)
    }
  })
})

console.log(markTitles) // Output: ["Xbox One"]
