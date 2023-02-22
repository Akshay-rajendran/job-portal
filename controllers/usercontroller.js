const bcrypt = require('bcrypt');
const { findOneAndUpdate } = require('../models/jobmodel');
const userModel = require("../models/usermodel")

const viewIndexPage = function (req, res, next) {
  res.render('index', { title: 'Express' });
}
const viewSignUp = (req, res, next) => {
  res.render("users/userlogin", { title: "signup" })
}
const usersignup = (req, res, next) => {
  if(req.session.alertmsg){
   let {alertmsg}=req.session
   console.log(alertmsg);
   res.render("users/user-signup",{alertmsg})
  }else{
    res.render("users/user-signup")
  }
}

const dosignup = async (req, res, next) => {
  try {
    req.body.Password = await bcrypt.hash(req.body.Password, 10)
    await userModel.create(req.body)
    res.redirect("/userlogin")
  } catch (error) {
    console.log(error, "failed")
    req.session.alertmsg="Oops..signup failed,Retry"
    res.redirect("/usersignup")
  }
}

const loginpageuser = async (req, res, next) => {
  const user = await userModel.findOne({ email: req.body.email })
  console.log( user);
  if (user) {
      const passwordcheck = await bcrypt.compare(req.body.password, user.Password)

    if (passwordcheck) {
      req.session.user = user
      res.redirect("/home")

    } else {
      res.redirect("/userlogin")
    }


  } else {
    res.redirect("/userlogin")
  }

}

const 
home = (req, res, next) => {
  // if (req.session.user) {
    // res.render("users/home.hbs", { user: req.session.user })
    res.render("users/home.hbs")
  // } else {
    // res.redir/ect("/userlogin")
  // }
}
const userupdateprofile=(req,res,next)=>{
  res.render("users/updateuserprofile")
}
const userprofile=async(req,res,next)=>{

  try {
    req.body.updated=true
 let updatedUser= await userModel.findOneAndUpdate({email:req.session.user.email},req.body,{new:true}) //new key word used for return updated profile after updating
  await req.files.image.mv(`./public/users/${req.session.user._id}.jpg`)  //to upload imagee like (user image)
  await req.files.resume.mv(`./public/resume/${req.session.user._id}.pdf`) //to upload resume in the form pdf
  req.session.user=updatedUser  
  res.redirect("/userlogin")
  }catch (error) {
res.redirect("/userlogin")
  
}
}

module.exports = {
  viewIndexPage,
  viewSignUp,
  usersignup,
  dosignup,
  loginpageuser,
  home,
  userupdateprofile,
  userprofile
}