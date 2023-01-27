
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
    await userModel.create(req.body)
    res.send("success")
   } catch (error) {
    console.log( error,"failed")
    res.send("failed")
   }
  
    


  }

  module.exports={
    viewIndexPage,
    viewSignUp,
    usersignup,
    dosignup
  }