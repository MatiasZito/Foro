var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

/* GET validar sign-in. */
router.post('/validar-signin', function(req, res, next) {
  let name = req.body.name;
  let surname = req.body.surname;
  let nickname = req.body.nickname;
  let email = req.body.email;
  let password = req.body.password;

  console.log(req.body);

  res.render('validar-signin', {name:name, surname:surname, nickname:nickname, email:email, password:password});
});

module.exports = router;
