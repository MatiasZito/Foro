var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/javascript', function(req, res, next) {
  res.render('javascript');
});
router.get('/javascript', function(req, res, next) {
  res.render('javascript');
});

module.exports = router;
