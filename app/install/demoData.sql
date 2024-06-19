

CREATE OR REPLACE FUNCTION generate_order_details() RETURNS VOID AS $$
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
END;
$$ LANGUAGE plpgsql;
SELECT generate_order_details();