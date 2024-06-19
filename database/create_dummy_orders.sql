BEGIN;
DO $$
DECLARE
    cust RECORD;
    prod RECORD;
    order_count INT;
    order_id BIGINT;
    order_date TIMESTAMP;
    prod_count INT;
    quantity INT;
BEGIN
    -- Loop through each customer
    FOR cust IN (SELECT id FROM customer) LOOP
        -- Each customer places between 0 and 10 orders
        order_count := (random() * 10)::INT;
        
        FOR i IN 1..order_count LOOP
            -- Generate a random order date within the last 3 months
            order_date := NOW() - (random() * (interval '90 days'));
            
            -- Insert the order
            INSERT INTO "order" (reference, id_customer, state, date_creation)
            VALUES (concat('ORD', cust.id, '_', i), cust.id, (random() * 4)::INT, order_date)
            RETURNING id INTO order_id;
            
            -- Each order contains between 1 and 4 different products
            prod_count := (random() * 4 + 1)::INT;
            
            FOR j IN 1..prod_count LOOP
                -- Select a random product
                SELECT * FROM product ORDER BY random() LIMIT 1 INTO prod;
                
                -- Generate a random quantity between 1 and 4
                quantity := (random() * 4 + 1)::INT;
                
                -- Insert the order detail
                INSERT INTO order_detail (id_order, id_product, quantity, unit_price)
                VALUES (order_id, prod.id, quantity, prod.price);
            END LOOP;
        END LOOP;
    END LOOP;
END $$;

COMMIT;