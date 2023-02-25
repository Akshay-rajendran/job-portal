const async = require("hbs/lib/async")
const jobApplicationModel = require("../models/job-applicationmodel")
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

const jobdelete=async(req,res,next)=>{
    console.log(req.params.id);
    await jobModel.deleteOne({_id:req.params.id})
    res.render("company/viewjobcompany")
}

const apply=async(req,res,next)=>{
  if(req.session.user){
  const job=await jobModel.findOne({_id:req.params.id})
  let body={
    userid:req.session.user._id,
    username:req.session.user.fullName,
    jobid:job._id,
    jobtitle:job.title,
    companyid:job.companyid,
    companyname:job.companyname,
    applieddate:new Date().toDateString(),
    
  }
  console.log(body);
   await jobApplicationModel.create(body)
  res.redirect("/userhome")
}else{
  res.redirect("/userlogin")
}
}

const viewappliedjob=async(req,res,next)=>{
  console.log(req.session.user);
 let aplliedjobs= await jobApplicationModel.find({userid:req.session.user._id})
 console.log("VIEW USER APPLIED JOBS",aplliedjobs);
  res.render("users/appliedjob",{aplliedjobs})
}


const viewappliedcompanyjob=async(req,res,next)=>{
 let companyapllyjob= await jobApplicationModel.find({companyid:req.session.company._id})
 let applied=companyapllyjob.filter(e=>e.status=="Applied")
 let accept=companyapllyjob.filter(e=>e.status=="Accept")
 let reject=companyapllyjob.filter(e=>e.status=="reject")
 console.log("VIEW APPLIED COMPANYJOBS",companyapllyjob);
 res.render("company/company-view-apply",{companyapllyjob,applied,accept,reject})
  }


  const rejectuser=async(req,res,next)=>{
     await jobApplicationModel.findOneAndUpdate({_id:req.params.id},{status:"reject"})
     res.redirect("/company/viewappliedjob")
  }


  const acceptuser=async(req,res,next)=>{
    let user=await jobApplicationModel.findOneAndUpdate({_id:req.params.id},{status:"Accept"})
    console.log("ACCEPT USER",user);
    res.redirect("/company/viewappliedjob")
  }
  const editjob=async(req,res,next)=>{
    let currentjob=await jobModel.findOne({_id:req.params.id})
    console.log("for edit",currentjob);
     res.render("company/editjob.hbs",{currentjob})
  }

  const editedjob=async(req,res,next)=>{
    try {
      req.body.dateposted=new Date().toDateString()
     let edited= await jobModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    console.log("edited job",edited);
    res.redirect("/company/compjobview")
    } catch (error) {
      console.log(error);
    }
  }
module.exports={
    jobupload,
     jobdata,
    companyjobview,
    viewjobuser,
    jobdelete,
    apply,
    viewappliedjob,
    viewappliedcompanyjob,
    rejectuser,
    acceptuser,
    editjob,
    editedjob
}