const bcrypt = require('bcrypt')
const userModel=require("../models/usermodel")

const viewIndexPage= function(req, res, next) {
    res.render('index', { title: 'Express' });
  }
  const viewSignUp=(req,res,next)=>{
     res.render("users/userlogin",{title:"signup"})
  }
  const usersignup=(req,res,next)=>{
    res.render("users/user-signup")
  }

  const dosignup=async (req,res,next)=>{
   try {
    req.body.Password=await bcrypt.hash(req.body.Password,10)
    await userModel.create(req.body)
   res.redirect("/userlogin")
   } catch (error) {
    console.log( error,"failed")
    res.redirect("/usersignup")
   }
  }

  module.exports={
    viewIndexPage,
    viewSignUp,
    usersignup,
    dosignup
  }