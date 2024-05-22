function categoryPage(req, res) {
    const idCategory = req.params['idCategory'];
    res.render('category',{idCategory});
  }
  
  // On met à disposition ces fonctions au routeur
  module.exports = {
    categoryPage
  };