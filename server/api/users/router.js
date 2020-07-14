const router = require('express').Router();
const {
    select,
    _delete
} = require('./controller.js');

router.get("/",select);
router.delete(`/:id`,_delete);
//router.delete("/",register);

module.exports = router;