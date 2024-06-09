const dataMapper = require('../app/data_mapper.js');
const client = require('../app/sql_client');

// CONSTANTES POUR LES CREATIONS
const customersToCreate = 15;
const maxCustomersOrders = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const installer = {
    createCustomers : async ()=>{
        let query = "";
        for (i = 0; i <= 15; i++){
            query +=`INSERT INTO "customer" ("first_name", "last_name","password","email") VALUES ('fakecustomer${i}','fakecustomer${i}', '12345678','fake${i}@fakemail.com'); `;
        };
        await client.query(query);
        
    },
    createOrders : async ()=>{
        const fakeCustomers = await dataMapper.getFakeCustomers();
        try{
            console.log("FAKEZ" + fakeCustomers);
        let query = ``;
        let index = 0;
        fakeCustomers.forEach((customer)=>{
            index ++;
            const numberOfOrders = getRandomInt(1,maxCustomersOrders);
            for (i = 0; i<= numberOfOrders; i++){
                query +=`INSERT INTO "order" ("reference","id_customer","state","date-creation") VALUES ('fakeorder${index}${i}','${customer.id}',1, NOW() - INTERVAL '3 months' * RANDOM());`;
            }
            
            // query +="test";
            
            
        });
        console.log("query" + query);
        await client.query(query);
        }catch(error){
            console.log(error);
            return(error);
            
        }
        // return fakeCustomers;
        // Query =`INSERT INTO "order" ("reference", "id_customer","state") VALUES ('RXFERM',1, 1); `;
    },
    createOrdersDetails : async () =>{
        const query = `DO $do$
DECLARE
    order_rec RECORD;
    product_rec RECORD;
    random_count INT;
    i INT;
BEGIN
    -- Loop through each order
    FOR order_rec IN SELECT id FROM "order" LOOP
        -- Generate a random number of order details to add (between 1 and 10)
        random_count := FLOOR(RANDOM() * 10) + 1;

        -- Loop to insert the random number of order details
        FOR i IN 1..random_count LOOP
            -- Select a random product
            SELECT * INTO product_rec FROM product ORDER BY RANDOM() LIMIT 1;

            -- Insert a new order detail record
            INSERT INTO order_detail (id_order, id_product, quantity, unit_price)
            VALUES (
                order_rec.id,
                product_rec.id,
                FLOOR(RANDOM() * 10) + 1, -- Random quantity between 1 and 10
                product_rec.price
            );
        END LOOP;
    END LOOP;
END $do$;
;
`
    }
    
}
module.exports = installer;