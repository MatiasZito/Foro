var express = require('express');
var router = express.Router();

var auth = require('../controller/AuthController');

router.get('/login', auth.login);

router.get('/signin', auth.signin);

/* GET validar sign-in. */
router.post('/validar-signin', auth.validar_sign_in);

module.exports = router;