import mongoose from "mongoose";

var product = mongoose.Schema({
    name:String,
    image:String,
    category:String,
    description:String,
    price:Number,
    stock:Number
});

module.exports = mongoose.model('Product',product);
