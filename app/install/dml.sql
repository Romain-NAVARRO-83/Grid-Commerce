-- CATEGORIES
INSERT INTO category
("name", "depth", id_parent)
VALUES('category 1', 0, NULL),('category 2', 0, NULL),('category 3', 0, NULL),('catgory 4', 0, NULL),('subcategory 1', 1, 1);

-- PRODUCTS
INSERT INTO product
("name", reference, description_short, price, picture_url, stock)
VALUES('DOM Pérignon', 'gcdp01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', 12.95, 'dom-perignon', 15),('Javanese Scriptography', 'gcdp02', 'A deep dive into confusing book covers along human History', 12.95, 'dom-perignon', 15),('Webdev Nightbalm', 'gcdp03', 'Improve your coding skills overnight', 12.95, 'dom-perignon', 15),('Pure CSS', 'gcdp04', 'Cascading liquor', 12.95, 'dom-perignon', 15);

-- PRODUCTS CATEGORIES
INSERT INTO category_product (id_product, id_category) VALUES (1, 1),(2, 1),(2, 2),(3, 3),(4, 4),(4, 5);

