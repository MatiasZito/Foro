var express = require('express');
var router = express.Router();

var index = require('../controller/IndexController');

/* GET home page. */
router.get('/', index.index);

router.get('/tema/*', index.temas);

router.get('/set-cookie', function(req, res, next){
    res.cookie('nombre-usuario', 'paolo', 60000).send('Cookie Definida');
});

router.get('/get-cookie', function(req, res, next){
    console.log(req.cookies);
    res.send('recogiendo Cookie');
    
});




module.exports = router;


