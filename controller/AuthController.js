let User = require('../model/User')

var AuthController = {}

AuthController.login = function (req, res, next) {
    res.render('login');
}


AuthController.validar_login = function (req, res, next) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    console.log (email,password);

    let uid = User.auth(email,password);
    if (uid) {
        res.render('validar-login');
    } else {
        res.send('not logged');
    }
}


AuthController.signin = function (req, res, next) {
    res.render('signin');
}

AuthController.validar_sign_in = function (req, res, next) {
    let name = req.body.name;
    let surname = req.body.surname;
    let nickname = req.body.nickname;
    let email = req.body.email;
    let password = req.body.password;

    console.log(req.body);

    res.render('validar-signin', { name: name, surname: surname, nickname: nickname, email: email, password: password });
}

module.exports = AuthController;