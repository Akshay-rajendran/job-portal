var express = require('express');
const { companysignup,companylogin,companyinputdata,companyloginpagefunction,homee,companyuserprofileview } = require('../controllers/companycontroller');
var router = express.Router();
const {jobupload,jobdata,companyjobview,jobdelete, viewappliedcompanyjob}=require("../controllers/jobcontroller");
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
module.exports = router;
