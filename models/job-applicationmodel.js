const mongoose=require("mongoose");

const jobApllicationSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    jobid:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    companyid:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    applieddate:{
        type:String,
        required:true,
        
    },
    status:{
        type:String,
        required:true,
        default:"Applied"
    }

})

const jobApplicationModel = mongoose.model("job-application",jobApllicationSchema);

module.exports=jobApplicationModel