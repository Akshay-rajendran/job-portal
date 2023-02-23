const bcrypt = require('bcrypt')
const async = require('hbs/lib/async')
const companyModel=require("../models/companymodel")
const userModel = require('../models/usermodel')

const companysignup=(req,res,next)=>{
    res.render("company/company-signup")
}
const companylogin=(req,res,next)=>{
 
    res.render("company/company-login")
  
  
}

const companyinputdata=async (req,res,next)=>{
    try {
        req.body.password=await bcrypt.hash(req.body.password,10)
        await companyModel.create(req.body)
        console.log("helooo");
        res.redirect("/company/companylogin")
    } catch (error) {
        console.log(error);
        
    }
}
const companyloginpagefunction=async (req,res,next)=>{
    const company=await companyModel.findOne({gmail:req.body.gmail})
    if(company){
        const companypasswordcheck = await bcrypt.compare(req.body.password, company.password)
        if(companypasswordcheck){
            req.session.company=company
            console.log(req.session.company);
            res.redirect("/company/companyhome")
        }else{
            res.redirect("/company/companylogin")

        }
    }else{
        res.redirect("/company/companylogin")
    }
}
const homee=(req,res,next)=>{
     res.render("company/company-home.hbs"   , { company: req.session.company })
    }

const companyuserprofileview=async(req,res,next)=>{
    let userprofile= await userModel.findOne({_id:req.params.id})
    console.log("companyuserprofileview",userprofile);
     res.render("company/company-userprofile-view",{userprofile})
}    

const companyprofileupdate=(req,res,next)=>{
    res.render("company/company-update-profile.hbs")
}

const companyprofileupdatedata=async(req,res,next)=>{
  let updatecompany=await companyModel.findOneAndUpdate({gmail:req.session.company.gamil},req.body,{new:true})
  console.log("updated company profile",updatecompany);
  await req.files.image.mv(`./public/users/${req.session.company._id}.jpg`) 
  req.session.company=updatecompany
  res.redirect("/company/companyhome")

}
module.exports={
    companysignup,
    companylogin,
    companyinputdata,
    companyloginpagefunction,
    homee,
    companyuserprofileview,
    companyprofileupdate,
    companyprofileupdatedata
}