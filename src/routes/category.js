import { Router } from "express"

const categoryRouter = Router()

categoryRouter.get('/', (req, res) => {
  res.send('Specific Category Page')
})

export default categoryRouter