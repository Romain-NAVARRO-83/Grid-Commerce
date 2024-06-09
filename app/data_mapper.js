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
            const result = await client.query(`SELECT * FROM product p INNER JOIN category_product cp ON p.id = cp.id_product WHERE cp.id_category = $1`,[idCategory]);
            const products = result.rows;
            return products;
        },
    getProductById: async (id) => {
        const result = await client.query(`SELECT * FROM "product" WHERE "id" = $1`,[id]);
        const product = result.rows;
        return product[0];
    },
    countProducts: async () => {
        const result = await client.query(`SELECT COUNT(*) FROM "product"`);
        const productCount = parseInt(result.rows[0].count, 10);
        return productCount;
    },
    countDepletedProducts: async () => {
        const result = await client.query(`SELECT COUNT(*) FROM "product" WHERE stock < 1`);
        const productCount = parseInt(result.rows[0].count, 10);
        return productCount;
    },
    getAllOrders: async () => {
        const result = await client.query(`SELECT * FROM "order"`);
        return result.rows;
    },getBestCustomers : async (limit = 5) => {
        const result = await client.query(`SELECT 
    customer.*,
    COUNT("order".id) AS order_count,
    COALESCE(SUM("order_detail".unit_price), 0) AS sum_orders
FROM 
    customer
LEFT JOIN 
    "order" ON customer.id = "order".id_customer
LEFT JOIN 
    "order_detail" ON "order".id = "order_detail".id_order
GROUP BY 
    customer.id
ORDER BY 
    order_count DESC
LIMIT $1;`,[limit]);
        return result.rows;
    }, getCustomerByEmail : async (email) =>{
        const result = await client.query(`SELECT * FROM "customer" WHERE email = $1`,[email]);
        return result.rows;
    },createCustomer : async (email, password) => {
        try{
            await client.query(`INSERT INTO "customer" (first_name, last_name, password,email) VALUES ('bob','fakeman',$1, $2)`,[password,email]);
            return('success');
        }catch(error){
            return(error);
        }
    },
    getOrders : async (limit = 10,offset = 0) =>{
        const result = await client.query(`SELECT "order".*, SUM("order_detail".unit_price) AS total_price
FROM "order"
JOIN "order_detail" ON "order".id = "order_detail".id_order
GROUP BY "order".id
ORDER BY "order".date_creation DESC
LIMIT $1 OFFSET $2;`,[limit,offset]);
        return result.rows;
    },
    getOrdersByWeek: async () => {
        const result = await client.query(` SELECT 
    year,
    month,
    week_of_month,
    number_of_orders,
    sum_orders,
    SUM(number_of_orders) OVER () AS total_number_of_orders
FROM (
    SELECT 
        EXTRACT(YEAR FROM "date_creation") AS year,
        EXTRACT(MONTH FROM "date_creation") AS month,
        EXTRACT(WEEK FROM "date_creation") - EXTRACT(WEEK FROM DATE_TRUNC('month', "date_creation")) + 1 AS week_of_month,
        COUNT(*) AS number_of_orders,
        COALESCE(SUM("order_detail".unit_price), 0) AS sum_orders
    FROM 
        "order"
        LEFT JOIN 
    "order_detail" ON "order".id = "order_detail".id_order
    GROUP BY 
        year, 
        month, 
        week_of_month
) AS weekly_orders
ORDER BY 
    year, 
    month, 
    week_of_month;`);
        return result.rows;
    },
        getFakeCustomers: async () => {
        const result = await client.query(`SELECT * FROM "customer" WHERE "first_name" LIKE 'fakecustomer%' AND "last_name" LIKE 'fakecustomer%' AND "email" LIKE'%@fakemail.com'`);
        return result.rows;
    },
    getCustomers : async (limit = 10,offset = 0) =>{
        const result = await client.query(`SELECT * FROM "customer" ORDER BY id DESC LIMIT $1 OFFSET $2;`,[limit,offset]);
        return result.rows;
    },
    getCategoriesProductCount : async () =>{
        const result = await client.query(`SELECT 
    "category".name, 
    COUNT("category_product".id) AS productCount 
FROM 
    "category" 
JOIN 
    "category_product" ON "category".id = "category_product".id_category 
GROUP BY 
    "category".name;`);
        return result.rows;
    },
    getBestSellers : async (limit = 5) =>{
        const result = await client.query(`SELECT 
    SUM("order_detail".quantity) AS totalsold, 
    "order_detail".id_product, 
    "product".name 
FROM 
    "order_detail" 
JOIN 
    "product" 
ON 
    "order_detail".id_product = "product".id 
GROUP BY 
    "order_detail".id_product, 
    "product".name 
ORDER BY 
    totalsold DESC 
LIMIT $1;`,[limit]);
        return result.rows;
    }
}
module.exports = dataMapper;