const dataMapper = require('../data_mapper.js');
const customerController = {
    loginPage : async (req, res) => {
        try{
            const categories = await dataMapper.getAllCategories();
            res.render("login", {categories, pageType : "login", pageTitle : "Login"});
        }catch(error){
      console.error(error);
      res.send("error");
        }
    },
    loginAttempt : async (req, res) => {
        try{
            const categories = await dataMapper.getAllCategories();
            res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["warning","Incorrect user email or password"]})
        }catch(error){
      console.error(error);
      res.send("error");
        }
    },
    signUp : async (req, res) => {
        try{
            const userEmail = req.body.email;
            const userPassword = req.body.password;
            const categories = await dataMapper.getAllCategories();
            const testUserExist = await dataMapper.getCustomerByEmail(userEmail);
            console.log(testUserExist);
            if (testUserExist.length){
                res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["warning","An account already exist with this email, you shoul try signing in instead"]});
            }else{
               try{
                const createCustomer =  await dataMapper.createCustomer(userEmail,userPassword);
                console.log(createCustomer);
                res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["ok","email is not in the database"]})
               }catch(error){
                console.error(error);
      res.send("error");
               }
            }
            
        }catch(error){
      console.error(error);
      res.send("error");
        }
    }
}
module.exports = customerController;