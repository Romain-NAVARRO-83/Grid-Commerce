const dataMapper = require('../data_mapper.js');
const {Customer} = require('../model/associations.js');
const {hash, compare, validPassword} = require('../modules/crypto.js');
var validator = require("email-validator");
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
        
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        
        try{
            
            const categories = await dataMapper.getAllCategories();
            const testUserExist = await Customer.findOne({
                where:{
                    email : userEmail
                }
            })
            // Validation email
        if (! validator.validate(userEmail)){
            res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["warning","The email provided doesn't have the right format"]});
        };
        // Validation password
        if (! validPassword(userPassword)){
            res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["warning","password format incorrect"]});
        }
        // Validation user exist
            if (testUserExist){
                res.render('login',{categories, pageType : "login", pageTitle : "Login",alert : ["warning","An account already exist with this email, you shoul try signing in instead"]});
            }else{

               try{
                const hashedPassword = hash(userPassword);
                await dataMapper.createCustomer(userEmail,hashedPassword);
                // console.log(createCustomer);
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