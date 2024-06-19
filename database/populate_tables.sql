BEGIN;
-- create customers
INSERT INTO "customer" ("first_name", "last_name", "password", "email") VALUES
('customer', 'fake', '12345678', 'customer1@fakemail.com'),
('customer', 'fake', '12345678', 'customer2@fakemail.com'),
('customer', 'fake', '12345678', 'customer3@fakemail.com'),
('customer', 'fake', '12345678', 'customer4@fakemail.com'),
('customer', 'fake', '12345678', 'customer5@fakemail.com'),
('customer', 'fake', '12345678', 'customer6@fakemail.com'),
('customer', 'fake', '12345678', 'customer7@fakemail.com'),
('customer', 'fake', '12345678', 'customer8@fakemail.com'),
('customer', 'fake', '12345678', 'customer9@fakemail.com'),
('customer', 'fake', '12345678', 'customer10@fakemail.com'),
('customer', 'fake', '12345678', 'customer11@fakemail.com'),
('customer', 'fake', '12345678', 'customer12@fakemail.com'),
('customer', 'fake', '12345678', 'customer13@fakemail.com'),
('customer', 'fake', '12345678', 'customer14@fakemail.com'),
('customer', 'fake', '12345678', 'customer15@fakemail.com'),
('customer', 'fake', '12345678', 'customer16@fakemail.com'),
('customer', 'fake', '12345678', 'customer17@fakemail.com'),
('customer', 'fake', '12345678', 'customer18@fakemail.com'),
('customer', 'fake', '12345678', 'customer19@fakemail.com'),
('customer', 'fake', '12345678', 'customer20@fakemail.com');


-- create categories
-- Insert level 1 categories
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Electronics', 1, NULL),
('Clothing', 1, NULL),
('Home & Kitchen', 1, NULL),
('Sports & Outdoors', 1, NULL);

-- Insert subcategories for 'Electronics'
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Mobile Phones', 2, (SELECT id FROM "category" WHERE name = 'Electronics')),
('Laptops', 2, (SELECT id FROM "category" WHERE name = 'Electronics')),
('Televisions', 2, (SELECT id FROM "category" WHERE name = 'Electronics')),
('Cameras', 2, (SELECT id FROM "category" WHERE name = 'Electronics')),
('Headphones', 2, (SELECT id FROM "category" WHERE name = 'Electronics'));

-- Insert subcategories for 'Clothing'
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Men Clothing', 2, (SELECT id FROM "category" WHERE name = 'Clothing')),
('Women Clothing', 2, (SELECT id FROM "category" WHERE name = 'Clothing')),
('Kids Clothing', 2, (SELECT id FROM "category" WHERE name = 'Clothing')),
('Accessories', 2, (SELECT id FROM "category" WHERE name = 'Clothing'));

-- Insert subcategories for 'Home & Kitchen'
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Furniture', 2, (SELECT id FROM "category" WHERE name = 'Home & Kitchen')),
('Kitchen Appliances', 2, (SELECT id FROM "category" WHERE name = 'Home & Kitchen')),
('Bedding', 2, (SELECT id FROM "category" WHERE name = 'Home & Kitchen')),
('Decor', 2, (SELECT id FROM "category" WHERE name = 'Home & Kitchen')),
('Storage', 2, (SELECT id FROM "category" WHERE name = 'Home & Kitchen'));

-- Insert subcategories for 'Sports & Outdoors'
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Exercise and Fitness', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors')),
('Outdoor Recreation', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors')),
('Team Sports', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors')),
('Fan Shop', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors')),
('Camping and Hiking', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors')),
('Cycling', 2, (SELECT id FROM "category" WHERE name = 'Sports & Outdoors'));


COMMIT;