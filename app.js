require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('assets'));
// app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const csrfErrorHandler = require("./app/middlewares/csrfErrorHandler.js");
const loadLoggedCustomer = require("./app/middlewares/loadLoggedCustomer.js");
const { frontCategories } = require('./app/middlewares/getCategoriesMiddleware.js');
const sessionMidleware = require("./app/middlewares/sessionMiddleware.js");

// Cookies 
// app.use(session({
//   secret: 'harrytuttle',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: false}
// }));

app.use(sessionMidleware);
app.use(loadLoggedCustomer);
app.use(frontCategories);




// cart middleware
app.use((req, res, next) => {
  req.session.cart = req.session.cart || [];
  next();
});
app.use((req, res, next) => {
  req.session.adminCredentials = req.session.adminCredentials || false;
  next();
})
app.use(router);
app.use(csrfErrorHandler);
app.use(function (req, res) {
  res.render('error/404', { pageType: "error", pageTitle: "Page non trouvée" });
});
app.listen(port, () => {
  console.log(`Grid Commerce listening:  http://localhost:${port}`);
});