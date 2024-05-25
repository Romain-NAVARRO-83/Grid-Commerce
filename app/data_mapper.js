const client = require('../app/sql_client');

const dataMapper = {
    getAllCategories: async () => {
        const result = await client.query('SELECT * FROM categories');
        const categories = result.rows;
        return categories
    },
    getAllProducts:
        async () => {
            const products = client.query('SELCT * FROM products');
            return products.rows;
        }
}
module.exports = dataMapper;