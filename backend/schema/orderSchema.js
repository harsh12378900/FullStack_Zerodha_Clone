const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({

    name: String,
    qty: Number,
    price: Number,
   mode: String,
}
 
)


module.exports = orderSchema;