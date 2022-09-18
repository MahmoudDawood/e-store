import { Router } from "express"
import Product from "../models/product.js"

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  Product.find().then(data=>{
    res.send(data)
  })
})

productsRouter.get('/:par', (req, res) => {
  Product.find({category:req.params.par}).then(data=>{
    if(data.length!=0){
      res.send(data);
    }
    else{
      Product.findById(req.params.par).then(data=>{
        res.send(data);
      }).catch(err=>{
        res.send(err);
      })
    }
  })
})

productsRouter.post('/',(req,res)=>{
  let newProduct = new Product({
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      description:req.body.description,
      price:req.body.price,
      stock:req.body.stock
  });
  newProduct.save().then((data)=>{
      res.send("saved");
      console.log("saved");
  });
});


// productsRouter.get('/:par', (req, res) => {
//   Product.findById(req.params.par).then(data=>{
//     if(data==null)
//       res.send(data)
//   }).catch(err => {
//     console.log(err);
//     Product.find({category:req.params.par}).then(data=>{
//       res.send(data)
//     }).catch(err=>{
//       console.log("there is no data");
//     })
//   })
// })


// productsRouter.get('/:id', (req, res) => {
//   Product.findById(req.params.id).then(data=>{
//     res.send(data)
//   })
// })

//"6321f1ed112fd0ee2c694a3f"


export default productsRouter
