var express = require('express');
const { viewIndexPage, viewSignUp,usersignup,dosignup } = require('../controllers/usercontroller');
var router = express.Router();


/* GET home page. */
router.get('/', viewIndexPage);
router.get("/userlogin", viewSignUp
)
router.get("/usersignup",usersignup)

router.post("/userssignup",dosignup)

module.exports = router;
