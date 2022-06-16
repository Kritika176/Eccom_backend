const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productratingsContainer :{type:Number},
    productratingsCount:{type:String},
    image:{type:String},
    brand:{type:String},
    name:{type:String},
    discountedPrice:{type:String},
    productstrike:{type:String},
    discountPercentage:{type:String},
    productsizeButton:{type:String},
    productsizeButton2:{type:String},
    productsizeButton3:{type:String},
    productsizeButton4:{type:String},
    productsizeButton5:{type:String},
     category:{type:String},
    
})  

module.exports = mongoose.model("Product",productSchema)