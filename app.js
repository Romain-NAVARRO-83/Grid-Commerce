require('dotenv').config();
const express = require('express');
const app = express();
// const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('assets'));
// app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const dayjs= require('dayjs')

// Cookies 
// app.use(session({
//   secret: 'harrytuttle',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: false}
// }));
const sessionMidleware = require("./app/middlewares/sessionMiddleware.js");
app.use(sessionMidleware);
const loadLoggedCustomer = require("./app/middlewares/loadLoggedCustomer.js");
app.use(loadLoggedCustomer);



app.use((req,res,next)=>{
  req.session.cart = req.session.cart || [];
  
  // console.log("cart : " + req.session.cart);
  next();
});
app.use((req,res,next)=>{
  req.session.adminCredentials = req.session.adminCredentials || false;
  next();
})


const port = process.env.PORT || 3000;
app.use(router);
app.use(function(req, res) {
  res.status(404).render('error/404');
});
app.listen(port, () => {
    console.log(`Grid Commerce listening:  http://localhost:${port}`);
  });