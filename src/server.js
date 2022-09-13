import express from "express"
import cartRouter from "./routes/cart.js"
import productRouter from "./routes/product.js"
import productsRouter from "./routes/products.js"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/products', productsRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to our E-Store')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})