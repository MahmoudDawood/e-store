import { Router } from "express"
import cart from "../models/cart.js"

const cartRouter = Router()

cartRouter.get('/', (req, res) => {
  cart.find().then(data => {res.send(data)});
})

cartRouter.post('/',(req,res)=>{
  let newCart = new cart({
    productId:req.body.productId
  });
  console.log(req.body.productId);
  console.log(Array.isArray(req.body.productId));
  console.log(newCart);
  newCart.save().then(data => {
    res.send("saved");
    console.log("saved");
  });
});

export default cartRouter