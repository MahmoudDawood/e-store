import { Router } from "express"
import Product from "../models/product.js"

const categoryRouter = Router()

categoryRouter.get('/', (req, res) => {
  res.send('Specific Category Page')
})

//"6321f1ed112fd0ee2c694a3f"
categoryRouter.get('/:id', (req, res) => {
  Product.findById(req.params.id).then(data=>{
    res.send(data)
  })
})

export default categoryRouter