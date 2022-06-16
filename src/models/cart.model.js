const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
userId:{type:String,required:true}, 
name:{type:String,required:true},
brand:{type:String,required:true},
size:{type:String,required:true},
discountedPrice:{type:String,required:true},
quantity:{type:Number,default:1},
image:{type:String,required:true}
   
    
},
{timestamps:true}
)  


module.exports = mongoose.model("Cart",cartSchema)