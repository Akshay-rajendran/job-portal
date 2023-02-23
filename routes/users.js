var express = require('express');
const { viewIndexPage, viewSignUp,usersignup,dosignup,loginpageuser,home,userupdateprofile,userprofile ,userhome} = require('../controllers/usercontroller');
var router = express.Router();
const {viewjobuser,apply,viewappliedjob}=require("../controllers/jobcontroller");
const userOnly = require('../middileware/usermiddileware');


/* GET home page. */
router.get('/', viewIndexPage);
router.get("/userlogin", viewSignUp
)
router.get("/usersignup",usersignup)

router.post("/userssignup",dosignup)

router.post("/userloginpage",loginpageuser)

router.get("/home",home)
router.get("/viewjobuser",viewjobuser)
router.get("/userprofile",userOnly,userupdateprofile)
router.post("/userprofile",userOnly,userprofile)
router.get("/applyjob/:id",userOnly,apply)
router.get("/view-user-application",userOnly,viewappliedjob)
router.get("/userhome",userOnly,userhome)
module.exports = router;
