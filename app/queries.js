const client =require('sql_client')

function getCategories()  {
    
// console.log('isdone');
    client.query('SELECT * FROM categories').then((data)=>{

        return(data.rows);
        const categories = data.rows;
      }).catch((error)=>{
        console.log(error);
        return("error");
      }) ;
}
module.exports = {
    getCategories
}