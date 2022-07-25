var express = require('express');
var router = express.Router();

var index = require('../controller/IndexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tema/*', index.temas);

module.exports = router;
