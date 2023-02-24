var express = require('express');
const { companysignup,
    companylogin,
    companyinputdata,
    companyloginpagefunction,
    homee,
    companyuserprofileview,
    companyprofileupdate,
    companyprofileupdatedata } = require('../controllers/companycontroller');
var router = express.Router();


const {jobupload,
    jobdata,
    companyjobview,
    jobdelete, 
    viewappliedcompanyjob,
    rejectuser,
    acceptuser}=require("../controllers/jobcontroller");
const companyOnly = require('../middileware/companymidlleware');
/* GET users listing. */


router.get("/companysignup",companysignup)
router.get("/companylogin",companylogin)
router.post("/companyylogin",companyinputdata)
router.post("/companyloginpage",companyloginpagefunction)
router.get("/companyhome",homee)
router.get("/jobupload",companyOnly,jobupload)
router.post('/jobuploaddata',jobdata)
router.get("/compjobview",companyOnly,companyjobview)
router.get("/delete/:id",jobdelete)
router.get("/viewappliedjob",companyOnly,viewappliedcompanyjob)
router.get("/company-userprofileview/:id",companyOnly,companyuserprofileview)
router.get("/reject/:id",companyOnly,rejectuser)
router.get("/accept/:id",companyOnly,acceptuser)
router.get("/companyprofileupdate",companyOnly,companyprofileupdate)
router.post("/companyprofileupdatedata",companyOnly,companyprofileupdatedata)
router.get("forjobedit",companyOnly,)
module.exports = router;
