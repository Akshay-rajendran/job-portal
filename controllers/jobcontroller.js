const jobModel = require("../models/jobmodel")


const jobupload=(req,res,next)=>{
  if(req.session.company){
    res.render("company/jobupload")
  }else{
    res.redirect("/company/companylogin")
  }

}
const jobdata=async (req,res,next)=>{
  if(req.session.company){
  try {
      req.body.companyid=req.session.company._id
      req.body.companyname=req.session.company.companyname
      req.body.dateposted=new Date().toDateString()
      await jobModel.create(req.body)
      // console.log(req.body);
      // res.redirect("/company/companylogin")
      res.json({
        success:true,
        msg:"job uploaded"
      })
  } catch (error) {
      console.log(error);
      
  }}else{
    res.redirect("/company/companylogin")
  }

}
const companyjobview=(req,res,next)=>{
  res.render("company/viewjobcompany")
}

module.exports={
    jobupload,
    jobdata,
    companyjobview
}