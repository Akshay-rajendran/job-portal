const mongoose = require("mongoose");


const jobschema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    companyname:{
        type:String
    },
    companyid:{
      type:String
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
        default:"posted"
      
    }

})

const jobModel = mongoose.model("job", jobschema);

module.exports=jobModel