const userOnly=(req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect("/userlogin")
    }
}

module.exports=userOnly