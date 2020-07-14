const router = require('express').Router();
const {
    register
} = require('./controller.js');

//router.post("/update",userUpdate);

//router.post("/updatepassword",userUpdatePassword);

router.post("/",register);

module.exports = router;