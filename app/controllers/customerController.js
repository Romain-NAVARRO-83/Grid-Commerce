// const dataMapper = require('../data_mapper.js');
const { Customer } = require('../model/associations.js');
const { hash, compare, validPassword } = require('../modules/crypto.js');
var validator = require("email-validator");
const customerController = {
    loginPage: async (req, res) => {
        try {
            // const categories = await dataMapper.getAllCategories();
            res.render("login", { pageType: "login", pageTitle: "Login", csrf: req.csrfToken() });
        } catch (error) {
            console.error(error);
            res.send("error");
        }
    },
    loginAttempt: async (req, res) => {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        try {
            const foundCustomer = await Customer.findOne({
                where: {
                    email: userEmail
                }
            })
            if (!foundCustomer || !compare(foundCustomer.password, userPassword)) {
                res.render('login', {
                    pageType: "login", pageTitle: "Login", alert: ["danger", "Incorrect user email or password"], csrf: req.csrfToken()
                });
            } else {
                req.session.customerId = foundCustomer.id;
                res.render('home', {

                    pageTitle: "Home",
                    pageType: "home",
                    cart: req.session.cart,
                    alert: ["valid", `You are now connected as ${foundCustomer.first_name} ${foundCustomer.last_name}`],
                    customer: foundCustomer, csrf: req.csrfToken()


                });
            }


        } catch (error) {
            console.error(error);
            res.send("error");
        }
    },
    signUp: async (req, res) => {

        const userFirstname = req.body.firstname;
        const userLastname = req.body.lastname;
        const userEmail = req.body.emailsignup;
        const userPassword = req.body.passwordsignup;

        // console.log(JSON.stringify(req.body));

        try {
            // const categories = await dataMapper.getAllCategories();
            const testUserExist = await Customer.findOne({
                where: {
                    email: userEmail
                }
            })
            // Validation email
            if (!validator.validate(userEmail)) {
                res.render('login', { pageType: "login", pageTitle: "Login", alert: ["danger", "The email provided doesn't have the right format"], csrf: req.csrfToken() });
            };
            // Validation password
            if (!validPassword(userPassword)) {
                res.render('login', { pageType: "login", pageTitle: "Login", alert: ["danger", "password format incorrect"], csrf: req.csrfToken() });
            }
            // Validation user exist
            if (testUserExist) {
                res.render('login', { pageType: "login", pageTitle: "Login", alert: ["danger", "An account already exist with this email, you shoul try signing in instead"], csrf: req.csrfToken() });
            } else {

                try {
                    const hashedPassword = await hash(userPassword);
                    const newCustomer = await Customer.create({
                        first_name: userFirstname,
                        last_name: userLastname,
                        email: userEmail,
                        password: hashedPassword
                    })
                    // console.log(createCustomer);

                    res.render('login', { pageType: "login", pageTitle: "Login", alert: ["valid", "Good ! Your account is created, you can now log in."], csrf: req.csrfToken() })
                } catch (error) {
                    console.error(error);
                    res.render('login', { pageType: "login", pageTitle: "Login", alert: ["danger", "An error occured, please try again"], csrf: req.csrfToken() })
                }
            }

        } catch (error) {
            console.error(error);
            res.send("error");
        }
    }
}
module.exports = customerController;