require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('assets'));

const dayjs= require('dayjs')

// Installation
const installer = require('./app/installer');
////////routes d'installation SQL (temporaire)
app.use('/install/customers', async(req,res)=>{
  try{
    await installer.createCustomers();
  res.send('created');
  }catch(error){
    res.send(error);
  }
});
app.use('/install/orders',async(req,res)=>{
  try{
    // const customers = await installer.createOrders();
    // console.log(customers);
    await installer.createOrders();
    res.send('Orders created');
  // res.send(customers);
  }catch(error){
    res.send(error);
    console.log(error);
  }
  
});
app.use('/install/orderdetails',async(req,res)=>{
  try{
    // const customers = await installer.createOrders();
    // console.log(customers);
    await installer.createOrdersDetails();
    res.send('Orders details created');
  // res.send(customers);
  }catch(error){
    res.send(error);
    console.log(error);
  }
  
})


// Cookies 
app.use(session({
  secret: 'harrytuttle',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false}
}));



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