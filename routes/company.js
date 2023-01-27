var express = require('express');
const { companysignup } = require('../controllers/companycontroller');
var router = express.Router();

/* GET users listing. */


router.get("/companysignup",companysignup)

module.exports = router;
