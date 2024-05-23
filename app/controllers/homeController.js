// app.set('view engine', 'ejs');
// app.set('views', 'app/views');
function index(req, res) {
  const pg = require('pg');
  const { Client } = pg
 
const client = new Client({
  user: 'appsqluser',
  password: '$$endeLL8',
  host: 'localhost',
  // port: 5334,
  database: 'gridcommerce',
});
client.connect();
client.query('SELECT * FROM categories').then((data)=>{
  res.render('home',{
    categories : data.rows
  });
  // res.send(data.rows);
}).catch((error)=>{
  res.send("error");
}) ;

   
 }
 
 // On met à disposition ces fonctions au routeur
 module.exports = {
   index
 };