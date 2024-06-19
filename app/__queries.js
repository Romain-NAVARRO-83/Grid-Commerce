const client =require('./sql_client')

const dataMapper = {
  getAllCategories : async ()=>{
    const result = await client.query('SELECT * FROM categories');
    const categories = result.rows;
    try{
      
    return categories;
    }catch{
      res.send("error");
    }
  },
  getAllProducts:
async ()=> {
  const products = client.query('SELCT * FROM products');
  return products.rows;
}}
module.exports =
    dataMapper
