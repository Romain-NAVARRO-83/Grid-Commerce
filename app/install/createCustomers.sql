CREATE OR REPLACE FUNCTION create_customers()
RETURNS VOID AS $$
DECLARE
    i INTEGER;
BEGIN
    FOR i IN 0..15 LOOP
        EXECUTE format('
            INSERT INTO customer (first_name, last_name, password, email) 
            VALUES (%L, %L, %L, %L);', 
            'fakecustomer' || i, 
            'fakecustomer' || i, 
            '12345678', 
            'fake' || i || '@fakemail.com');
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Appel de la fonction pour insérer les enregistrements
SELECT create_customers();