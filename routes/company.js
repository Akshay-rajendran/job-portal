var express = require('express');
const { companysignup,companylogin,companyinputdata } = require('../controllers/companycontroller');
var router = express.Router();

/* GET users listing. */


router.get("/companysignup",companysignup)
router.get("/companylogin",companylogin)
router.post("/companyylogin",companyinputdata)

module.exports = router;
