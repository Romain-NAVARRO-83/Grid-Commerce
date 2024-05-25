const client = require('../app/sql_client');

const dataMapper = {
    getAllCategories: async () => {
        const result = await client.query('SELECT * FROM categories');
        const categories = result.rows;
        return categories
    },
    getAllProducts:
        async () => {
            const result = await client.query('SELECT * FROM products');
            const products = result.rows;
            return products;
        }
}
module.exports = dataMapper;