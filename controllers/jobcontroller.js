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
      res.redirect("/company/compjobview")
  } catch (error) {
      console.log(error);
      
  }}else{
    res.redirect("/company/companylogin")
  }

}
const companyjobview=async(req,res,next)=>{
  if(req.session.company){
let job =await jobModel.find({companyid:req.session.company._id})
console.log(job);
  res.render("company/viewjobcompany",{job})
}else{
  res.redirect("/company/companylogin")
}}

const viewjobuser=async(req,res,next)=>{
  let userjobview=await jobModel.find({jobstatus:"posted"})
  console.log(userjobview);
res.render("users/viewjobuser",{userjobview})
}

module.exports={
    jobupload,
    jobdata,
    companyjobview,
    viewjobuser
}