var mongoose = require('mongoose');
var QuestionModel = require("../model/Question");
var IndexController = {};

IndexController.index = function(req, res, next) {
  res.render('index');
};

   
    /*
    QuestionModel.findOne({user_id:id}).exec(function(err, question){
        if( err ){ console.log('Error: ', err); return; }
        console.log(question);
        res.render('../views/pagina_tema', {question:question});
    });*/


  IndexController.list = function(req, res, next){
    console.log("indexcontroller.list");
    let path = req.path;
    let tema = path.split('/')[2];
    console.log(tema);
  
    if (tema == "javascript" || tema == "html" || tema == "css"){
      QuestionModel.find({type:tema}).exec(function(err, question){
          if( err ){ console.log('Error: ', err); return; }
          console.log(question);
          console.log(question[0].title);
          res.render('pagina_tema', {question: question, tema:tema} ); 
      });
    }
    else {
      res.render('pagina_tema_no_encontrado', {tema:tema});
    }
};


  module.exports = IndexController;