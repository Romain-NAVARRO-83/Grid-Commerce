const { Customer } = require("../model/associations.js");

const loadLoggedCustomer = async (req, res, next) => {
  console.log('session : ' + req.session.customerId);
  const customerId = req.session && req.session.customerId; // number || undefined
  if (customerId) { // Si l'utilisateur est effectivement connecté, on le charge depuis la BDD
    const customer = await Customer.findByPk(customerId);
    res.locals.customer = customer; // On le met dans les locals afin de s'en servir dans n'importe quelle vue EJS
    req.customer = customer; // On accroche à req (qui se balade de middleware en middleware) le user loggé
  }

  next();
};

module.exports = loadLoggedCustomer;