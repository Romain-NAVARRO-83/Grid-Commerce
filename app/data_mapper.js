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
        }
}
module.exports = dataMapper;