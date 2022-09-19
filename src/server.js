import express from "express"
import mongoose from "mongoose"

import Product from "./models/product.js"
import User from "./models/user.js"
import cartRouter from "./routes/cart.js"
import productRouter from "./routes/product.js"
import productsRouter from "./routes/products.js"
import categoryRouter from "./routes/category.js"
import cors from "cors"


const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use('/products/:category/:id', productRouter);
// app.use('/products/:category', categoryRouter);

app.get('/user', (req,res) => {
  User.find().then(data => res.send(data));
});

app.get('/login',(req,res) => {
  let name = req.body.name;
  let password = req.body.password;
  User.findOne({username: name , password: password}).then(data => res.send(data));
});

app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/', productsRouter);

mongoose.connect('mongodb+srv://iti:12345678iti@cluster0.bwtz43s.mongodb.net/?retryWrites=true&w=majority')
.then(console.log("connected"));

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to our E-Store')
})


app.post('/user',(req,res)=>{
  let newUser = new User({
      name:req.body.name,
      password:req.body.password,
      email:req.body.email,
      phone:req.body.email,
      cart:[]
  });
  console.log(newUser);
  newUser.save().then((data)=>{
      res.send("saved");
      console.log("saved");
  });
});

app.put("/user/cart",(req,res) => {
  User.findByIdAndUpdate({_id: req.body.id},{$push: {cart: req.body.cart}},(e,s) => {
    if(e){
      throw e;
    }
    else{
      res.send("added");
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
