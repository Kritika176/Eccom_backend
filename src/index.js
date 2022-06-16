const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
app.use(express.json());

app.use(cors({origin: true, credentials: true}));
require("dotenv").config()

app.use("/register",registerController);
app.use("/login",loginController);
app.use("/products",productController);
app.use("/cart",cartController);
const connect = async() => {
    try{
        mongoose.connect("mongodb+srv://kritika176:kritika176@cluster0.7rdip.mongodb.net/Eccom")
    }
    catch(err){
        console.log(err.message)
    }
}
                                                      

app.listen(process.env.PORT||8080,async() => {
    try{
        await connect();
        console.log("Listening on port 8080")
    }
    catch(err){
        console.log(err.message)
    }
});