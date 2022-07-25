var express = require('express');
var router = express.Router();

var index = require('../controller/IndexController');

/* GET home page. */
router.get('/', index.index);

router.get('/tema/*', index.temas);

module.exports = router;
