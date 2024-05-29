const dataMapper = require('./data_mapper.js');

const categories = async() =>{
    try{
        const categories = await dataMapper.getAllCategories();
        console.log(categories)
        return(categories.rows);
        
    }catch(err){
        return("error");
    }
}
