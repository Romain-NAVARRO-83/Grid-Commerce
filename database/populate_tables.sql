BEGIN;
-- create customers
INSERT INTO "customer" ("first_name", "last_name", "password", "email") VALUES
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer1@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer2@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer3@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer4@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer5@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer6@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer7@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer8@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer9@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer10@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer11@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer12@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer13@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer14@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer15@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer16@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer17@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer18@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer19@fakemail.com'),
('customer', 'fake', '$argon2id$v=19$m=65536,t=3,p=4$usS/q2H/b+BulJ3Ir++HtA$xcrmHj0R4YnCLFsZ/U2bDArlD8NVIfx6EkdV63/xa+iXKfHLzXjkeQ', 'customer20@fakemail.com');


-- create categories
-- Insert level 1 categories
INSERT INTO "category" ("name", "depth", "id_parent") VALUES
('Beryl Family', 1, NULL),
('Corundum Family', 1, NULL),
('Quartz Family', 1, NULL),
('Garnet Family', 1, NULL),
-- Subctegories
('Emerald', 2, 1),
('Aquamarine', 2, 1),
('Morganite', 2, 1),
('Heliodor', 2, 1),
('Ruby', 2, 2),
('Sapphire', 2, 2),
('Star Sapphire', 2, 2),
('Fancy Sapphire', 2, 2),
('Amethyst', 2, 3),
('Citrine', 2, 3),
('Rose Quartz', 2, 3),
('Smoky Quartz', 2, 3),
('Almandine', 2, 4),
('Pyrope', 2, 4),
('Spessartine', 2, 4),
('Grossular', 2, 4);


COMMIT;