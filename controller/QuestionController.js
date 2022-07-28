var mongoose = require('mongoose');
var QuestionModel = require("../model/Question");

var questionController = {};

/*questionController.list = function(req, res){
    
    console.log("Question")
    RecetaModel.find({}).exec(function(err, recetas){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        console.log(recetas)
        res.render('../views/receta/index', {recetas: recetas} ); 
    });
};
*/



questionController.show = function(req, res){
    console.log('ruta:', req.path);
    let ruta = req.path;
    let id = ruta.split("/")[3];
    console.log(id);

    QuestionModel.findOne({user_id:id}).exec(function(err, question){
        if( err ){ console.log('Error: ', err); return; }
        console.log(question);
        res.render('../views/pagina_tema', {question:question});
    });

};

module.exports = questionController;