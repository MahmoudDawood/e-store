import { Router } from "express"

const cartRouter = Router()

cartRouter.get('/', (req, res) => {
  res.send('Cart page')
})

export default cartRouter