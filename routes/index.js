var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tema/*', function(req, res, next) {
  let path = req.path;
  let tema = path.split('/')[2];
  console.log(tema);
  res.render('pagina_tema', {tema:tema});
});

module.exports = router;
