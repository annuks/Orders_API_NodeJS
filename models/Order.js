const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
   
    subTotal:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
});
module.exports=mongoose.model('Order',orderSchema);