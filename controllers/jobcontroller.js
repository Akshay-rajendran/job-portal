const jobModel = require("../models/jobmodel")


const jobupload=(req,res,next)=>{
  if(req.session.company){
    res.render("company/jobupload")
  }else{
    res.redirect("/company/companylogin")
  }

}
const jobdata=async (req,res,next)=>{
  try {
      
      // await jobModel.create(req.body)
      console.log(req.body);
      // res.redirect("/company/companylogin")
      res.json({
        success:true,
        msg:"job uploaded"
      })
  } catch (error) {
      console.log(error);
      
  }
}

module.exports={
    jobupload,
    jobdata
}