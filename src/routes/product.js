import { Router } from "express"

const productRouter = Router()

productRouter.get('/', (req, res) => {
  res.send('Specific product page')
})

export default productRouter