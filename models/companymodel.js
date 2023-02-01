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
    }

})
const companyModel = mongoose.model("company", companyschema);
module.exports=companyModel