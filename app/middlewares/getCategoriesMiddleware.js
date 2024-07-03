const {Category} = require('../model/associations');

const getCategoriesMiddleware = {
    frontCategories : async (req,res,next) => {
        try{
            const frontCategories = await Category.findAll();
            console.log(frontCategories);
            locals.categories = frontCategories;
            next();
        }catch{
            const frontCategories =["No category"];
            next();
        }
    }
}
module.exports = getCategoriesMiddleware;