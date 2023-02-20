const bcrypt = require('bcrypt')
const companyModel=require("../models/companymodel")

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
module.exports={
    companysignup,
    companylogin,
    companyinputdata,
    companyloginpagefunction,
    homee
}