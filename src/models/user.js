import mongoose from "mongoose";

var user = mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phone:String,
    cart:[String]
});

export default mongoose.model('User',user);
