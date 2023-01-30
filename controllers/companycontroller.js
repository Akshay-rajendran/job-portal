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
module.exports={
    companysignup,
    companylogin,
    companyinputdata
}