var express = require('express');
const { viewIndexPage, viewSignUp,usersignup,dosignup,loginpageuser,home } = require('../controllers/usercontroller');
var router = express.Router();
const {viewjobuser}=require("../controllers/jobcontroller")


/* GET home page. */
router.get('/', viewIndexPage);
router.get("/userlogin", viewSignUp
)
router.get("/usersignup",usersignup)

router.post("/userssignup",dosignup)

router.post("/userloginpage",loginpageuser)

router.get("/home",home)
router.get("/viewjobuser",viewjobuser)

module.exports = router;
