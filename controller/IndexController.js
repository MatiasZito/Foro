var mongoose = require('mongoose');
var QuestionModel = require("../model/Question");
var IndexController = {};

IndexController.index = function(req, res, next) {
  res.render('index');
};

IndexController.temas = function(req, res, next) {
    console.log('ruta:', req.path);
    let ruta = req.path;
    let id = ruta.split("/")[3];
    console.log(id);

    let path = req.path;
    let tema = path.split('/')[2];
    if (tema == "javascript" || tema == "html" || tema == "css") {
    res.render('pagina_tema', {tema:tema});
    }
    else {
      res.render('pagina_tema_no_encontrado', {tema:tema});
    }

    
    /*
    QuestionModel.findOne({user_id:id}).exec(function(err, question){
        if( err ){ console.log('Error: ', err); return; }
        console.log(question);
        res.render('../views/pagina_tema', {question:question});
    });*/

  }

  IndexController.list = function(req, res){
    console.log("indexcontroller.list");
    let path = req.path;
    let tema = path.split('/')[2];
    console.log(tema);
  
    QuestionModel.find().exec(function(err, question){
        if( err ){ console.log('Error: ', err); return; }
        console.log(question);
        console.log(question[0].title);
        res.render('../views/pagina_tema', {question: question, tema:tema} ); 
    });
};


  module.exports = IndexController;