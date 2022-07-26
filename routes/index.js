var express = require('express');
var router = express.Router();

var index = require('../controller/IndexController');
var question = require('../controller/QuestionController.js');


/* GET home page. */
router.get('/', index.index);

router.get('/tema/*', index.list);

router.get('/set-cookie', function(req, res, next){
    res.cookie('nombre-usuario', 'paolo', 60000).send('Cookie Definida');
});

router.get('/get-cookie', function(req, res, next){
    console.log(req.cookies);
    res.send('recogiendo Cookie');
});

/* GET pagina de una preguntas. */
//router.get('/tema/*', question.show);



module.exports = router;


