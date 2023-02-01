var express = require('express');
const { companysignup,companylogin,companyinputdata,companyloginpagefunction,homee } = require('../controllers/companycontroller');
var router = express.Router();

/* GET users listing. */


router.get("/companysignup",companysignup)
router.get("/companylogin",companylogin)
router.post("/companyylogin",companyinputdata)
router.post("/companyloginpage",companyloginpagefunction)
router.get("/companyhome",homee)

module.exports = router;
