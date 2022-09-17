import express from "express"
import cartRouter from "./routes/cart.js"
import productRouter from "./routes/product.js"
import productsRouter from "./routes/products.js"
import categoryRouter from "./routes/category.js"
import mongoose from "mongoose"

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use('/products/:category/:id', productRouter);
app.use('/products/:category', categoryRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

mongoose.connect('')
.then(console.log("connected"));

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to our E-Store')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
