import { Router } from "express"
import Product from "../models/product.js"

const productRouter = Router()

productRouter.get('/', (req, res) => {
  console.log(req.url);
  // Product.findOne({id:req})
  res.send('Specific product page')
})

export default productRouter