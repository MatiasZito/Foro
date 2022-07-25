var IndexController = {};

IndexController.index = function(req, res, next) {
  res.render('index');
};

IndexController.temas = function(req, res, next) {
    let path = req.path;
    let tema = path.split('/')[2];
    if (tema == "javascript" || tema == "html" || tema == "css") {
    res.render('pagina_tema', {tema:tema});
    }
    else {
      res.render('pagina_tema_no_encontrado', {tema:tema});
    }
  }

  module.exports = IndexController;