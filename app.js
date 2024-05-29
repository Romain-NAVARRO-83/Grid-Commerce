require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('assets'));

// app.locals.categories = require('./app/getCategories');

const port = process.env.PORT || 3000;
// app.get('/', (req,res)=> {
//     res.render('home');
//     console.log(router);
// })
app.use(router);
// router.get('/', (req,res)=>{
//     res.send('isok');
// })
app.listen(port, () => {
    console.log(`Grid Commerce listening:  http://localhost:${port}`);
  });