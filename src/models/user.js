import mongoose from "mongoose";

var user = mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phone:String,
    cart:[Number]
});

export default mongoose.model('User',user);
