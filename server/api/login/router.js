const router = require('express').Router();
const {
    login,
    logout,
    isAuth
} = require('./controller.js');

router.post("/",login);
router.delete("/",logout);
router.get("/",isAuth);

module.exports = router;