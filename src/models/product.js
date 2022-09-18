import mongoose from "mongoose";

var product = mongoose.Schema({
    name:String,
    image:String,
    category:String,
    description:String,
    price:Number,
    stock:Number
});

export default mongoose.model('Product',product);
// module.exports = mongoose.model('Product',product);
