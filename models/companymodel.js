const mongoose = require("mongoose");

const companyschema = new mongoose.Schema({
    companyname: {
        type: String
    },
    gmail: {
        type: String,
        unique:true
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    type: {
        type: String
    },
    about:{
        type:String
    },
    address:{
        type:String
    },
    mission:{
        type:String
    },
    vision:{
        type:String
    },
    update:{
        type:Boolean,
        default:false
    }

})
const companyModel = mongoose.model("company", companyschema);
module.exports=companyModel