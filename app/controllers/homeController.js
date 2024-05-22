// app.set('view engine', 'ejs');
// app.set('views', 'app/views');
function index(req, res) {
   // grâce à al config EJS, cf plus haut
   // express ira chercher le fichier app/views/index.ejs
   res.render('home');
 }
 
 // On met à disposition ces fonctions au routeur
 module.exports = {
   index
 };