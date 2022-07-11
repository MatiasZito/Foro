var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET validar sign-in. */
router.post('/validar-signin', function(req, res, next) {
  let name = req.body.name;
  let surname = req.body.surname;
  let nickname = req.body.nickname;
  let email = req.body.email;
  let password = req.body.password;

  console.log(email,password);

  res.render('validar-signin', {name:name, surname:surname, nickname:nickname, email:email, password:password})
});

router.get('/javascript', function(req, res, next) {
  res.render('javascript');
});
router.get('/javascript', function(req, res, next) {
  res.render('javascript');
});

module.exports = router;
