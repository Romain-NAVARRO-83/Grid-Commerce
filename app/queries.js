const client =require('sql_client')

const dataMapper = {
  getcategories : async ()=>{
    const categories = client.query('SELECT * FROM categories');
    return categories.rows;
  }
}
module.exports =
    getCategories
