const mongoose = require("mongoose");

const jobschema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    veccancy:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    dateposted:{
        type:String,
      
    },
    lastdate:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    jobstatus:{
        type:String,
      
    }

})

const jobModel = mongoose.model("job", jobschema);

module.exports=jobModel