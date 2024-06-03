const client = require('../app/sql_client');

const dataMapper = {
    getAllCategories: async () => {
        const result = await client.query('SELECT * FROM category');
        const categories = result.rows;
        return categories
    },
    getAllProducts:
        async () => {
            const result = await client.query('SELECT * FROM product');
            const products = result.rows;
            return products;
        },
        getCategoryProducts:
        async (idCategory) => {
            const result = await client.query(`SELECT * FROM product p INNER JOIN category_product cp ON p.id = cp.id_product WHERE cp.id_category = ${idCategory}`);
            const products = result.rows;
            return products;
        },
        getProductById : async (id) =>{
            const result = await client.query(`SELECT * FROM "product" WHERE "id" = ${id}`);
            const product = result.rows;
            return product[0];
        },
        countProducts : async ()=>{
            const result = await client.query(`SELECT COUNT(*) FROM "product"`);
            const productCount = parseInt(result.rows[0].count,10);
            return productCount;
        },
        countDepletedProducts : async ()=>{
            const result = await client.query(`SELECT COUNT(*) FROM "product" WHERE stock < 1`);
            const productCount = parseInt(result.rows[0].count,10);
            return productCount;
        }
}
module.exports = dataMapper;