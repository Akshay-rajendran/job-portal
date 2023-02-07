var express = require('express');
const { companysignup,companylogin,companyinputdata,companyloginpagefunction,homee } = require('../controllers/companycontroller');
var router = express.Router();
const {jobupload,jobdata,companyjobview}=require("../controllers/jobcontroller")
/* GET users listing. */


router.get("/companysignup",companysignup)
router.get("/companylogin",companylogin)
router.post("/companyylogin",companyinputdata)
router.post("/companyloginpage",companyloginpagefunction)
router.get("/companyhome",homee)
router.get("/jobupload",jobupload)
router.post('/jobuploaddata',jobdata)
router.get("/compjobview",companyjobview)

module.exports = router;
