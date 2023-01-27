const mongoose = require("mongoose");

const userschema=new mongoose.Schema({
    fullName:{
        type:String,
        maxlength:[25,"charatetrs must be less than 25"],
        required:true
    },
    email:{
        type:String,
        maxlength:[25,"charatetrs must be less than 25"],
        
    },
    phoneNumber:{
        type:Number,
        maxlength:[11,"charatetrs must be less than 11"],
        
    },
    password:{
        type:String,
        maxlength:[25,"charatetrs must be less than 25"],
    
    },
    workStatus:{
        type:String,
    
    }
})

const userModel = mongoose.model("user", userschema);

module.exports=userModel