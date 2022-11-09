const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:100
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
        max:1024
    },
    subTotal:{
        type:Number,
        //required:true,
        max:13
    },
});
module.exports=mongoose.model('User',userSchema);