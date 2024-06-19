-- Fonction pour générer un entier à 8 chiffres aléatoires
CREATE OR REPLACE FUNCTION generate_random_number(length INTEGER)
RETURNS BIGINT AS $$
DECLARE
    result BIGINT := 0;
    i INTEGER;
BEGIN
    FOR i IN 1..length LOOP
        result := result * 10 + floor(random() * 10)::BIGINT;
    END LOOP;
    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour créer des commandes pour chaque client
CREATE OR REPLACE FUNCTION create_orders_for_customers()
RETURNS VOID AS $$
DECLARE
    customer_id INTEGER;
    num_orders INTEGER;
    i INTEGER;
BEGIN
    -- Boucle sur chaque client
    FOR customer_id IN SELECT id FROM customer LOOP
        -- Générer un nombre aléatoire de commandes entre 0 et 10
        num_orders := floor(random() * 11);
        
        FOR i IN 1..num_orders LOOP
            -- Insérer une commande avec une référence aléatoire et l'état fixé à 1
            INSERT INTO "order" (reference, id_customer, state, date_creation)
            VALUES (generate_random_number(8), customer_id, 1, CURRENT_TIMESTAMP);
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Appel de la fonction pour insérer les enregistrements de commandes
SELECT create_orders_for_customers();

