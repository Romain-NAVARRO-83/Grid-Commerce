BEGIN;
-- Insert products into the product table
INSERT INTO "product" ("name", "reference", "description_short", "price", "picture_url", "stock") VALUES
('iPhone 12', 'REF001', 'Apple iPhone 12', 799, 'http://example.com/iphone12.jpg', 50),
('Samsung Galaxy S21', 'REF002', 'Samsung Galaxy S21', 699, 'http://example.com/galaxys21.jpg', 60),
('Dell XPS 13', 'REF003', 'Dell XPS 13 Laptop', 999, 'http://example.com/dellxps13.jpg', 30),
('Sony Bravia 55"', 'REF004', 'Sony Bravia 55" TV', 599, 'http://example.com/sonybravia55.jpg', 20),
('Canon EOS R5', 'REF005', 'Canon EOS R5 Camera', 3899, 'http://example.com/canoneosr5.jpg', 10),
('Bose QuietComfort 35', 'REF006', 'Bose QuietComfort 35 Headphones', 299, 'http://example.com/boseqc35.jpg', 40),
('iPad Pro', 'REF007', 'Apple iPad Pro', 999, 'http://example.com/ipadpro.jpg', 25),

('Men T-Shirt', 'REF008', 'Basic Men T-Shirt', 19, 'http://example.com/mentshirt.jpg', 100),
('Women Dress', 'REF009', 'Stylish Women Dress', 49, 'http://example.com/womendress.jpg', 80),
('Kids Jacket', 'REF010', 'Kids Winter Jacket', 39, 'http://example.com/kidsjacket.jpg', 50),
('Leather Wallet', 'REF011', 'Genuine Leather Wallet', 29, 'http://example.com/leatherwallet.jpg', 70),
('Men Jeans', 'REF012', 'Denim Men Jeans', 39, 'http://example.com/menjeans.jpg', 90),
('Women Handbag', 'REF013', 'Elegant Women Handbag', 79, 'http://example.com/womenhandbag.jpg', 40),
('Kids Shoes', 'REF014', 'Comfortable Kids Shoes', 29, 'http://example.com/kidsshoes.jpg', 60),

('Sofa', 'REF015', 'Modern Sofa', 499, 'http://example.com/sofa.jpg', 20),
('Microwave Oven', 'REF016', 'High Power Microwave Oven', 99, 'http://example.com/microwaveoven.jpg', 30),
('Queen Size Bed', 'REF017', 'Comfortable Queen Size Bed', 399, 'http://example.com/queensizebed.jpg', 10),
('Wall Art', 'REF018', 'Beautiful Wall Art', 59, 'http://example.com/wallart.jpg', 50),
('Storage Box', 'REF019', 'Multipurpose Storage Box', 19, 'http://example.com/storagebox.jpg', 80),
('Dining Table', 'REF020', 'Wooden Dining Table', 299, 'http://example.com/diningtable.jpg', 15),
('Blender', 'REF021', 'High-Speed Blender', 89, 'http://example.com/blender.jpg', 40),

('Yoga Mat', 'REF022', 'Non-slip Yoga Mat', 29, 'http://example.com/yogamat.jpg', 60),
('Tent', 'REF023', '4-Person Camping Tent', 129, 'http://example.com/tent.jpg', 20),
('Football', 'REF024', 'Official Size Football', 25, 'http://example.com/football.jpg', 100),
('Fan Jersey', 'REF025', 'Team Fan Jersey', 49, 'http://example.com/fanjersey.jpg', 50),
('Hiking Boots', 'REF026', 'Waterproof Hiking Boots', 79, 'http://example.com/hikingboots.jpg', 30),
('Mountain Bike', 'REF027', '21-Speed Mountain Bike', 399, 'http://example.com/mountainbike.jpg', 10),
('Dumbbell Set', 'REF028', 'Adjustable Dumbbell Set', 89, 'http://example.com/dumbbellset.jpg', 40);

UPDATE "product" SET "description_long" = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <strong>elementum ligula</strong> nec urna tincidunt, ac consequat libero eleifend. Nullam vehicula massa vitae augue suscipit, at ullamcorper risus facilisis. Donec vel velit lacinia, suscipit velit eget, pretium sapien. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a eros vel mauris sodales convallis non in metus. Phasellus fermentum libero sed arcu pretium, sit amet posuere nisi accumsan. Maecenas at orci non magna convallis tincidunt. Sed in sapien sit amet nunc viverra tempor.</p>

<p>Vivamus feugiat, tortor sit amet ultricies ultrices, <strong>mi mauris facilisis</strong> nisi, ac interdum ligula lorem id est. Duis in efficitur ex. Suspendisse potenti. Aenean fringilla, lacus a venenatis cursus, tortor sapien placerat leo, a luctus turpis nunc id neque. Curabitur in felis nec neque dignissim ullamcorper. Integer vel nibh commodo, facilisis lorem vel, auctor est. Vestibulum ac libero eget mi dictum volutpat. Ut id malesuada sapien, at gravida elit. Nunc varius sollicitudin felis nec venenatis.</p>

<p>Phasellus finibus sapien nec justo sollicitudin, id efficitur libero consequat. Integer non erat quis erat vehicula venenatis. <strong>Ut porttitor massa</strong> non odio tempor, a elementum risus eleifend. Sed viverra, augue et scelerisque finibus, dui lacus feugiat nulla, ac facilisis eros ligula ut erat. Fusce sit amet diam leo. Nullam euismod lacus eu dui lobortis, sed scelerisque ligula luctus. Duis nec nisi nec arcu egestas elementum ac ut nunc. Donec dignissim consectetur dui, sit amet pretium orci.</p>

<p>Suspendisse volutpat eros nec dapibus gravida. Nulla facilisi. Mauris sit amet lorem a purus consectetur venenatis. Cras at nisl et urna congue convallis. Proin tempus magna eu metus malesuada, ut euismod erat scelerisque. Vivamus varius ex ut risus fermentum tincidunt. Pellentesque id ipsum justo. In euismod fermentum mauris ut efficitur.</p>

<p>Sed suscipit metus at massa suscipit, non posuere leo consequat. Integer ut augue vel lectus gravida vulputate. Vestibulum interdum justo vitae malesuada scelerisque. Curabitur vehicula justo in arcu interdum, a venenatis urna pharetra. Aliquam erat volutpat. Morbi auctor bibendum dolor, et porttitor nisi luctus sit amet. Nullam et ultricies eros. Nunc ac justo dolor. In eget felis eu purus tempor feugiat at vel magna.</p>

<p>Mauris ultrices, sapien a scelerisque sollicitudin, enim erat aliquet ligula, in fermentum dui erat eu nisl. Nam a sagittis elit. Vestibulum rhoncus justo vel erat lobortis, quis pretium purus varius. Nulla facilisi. Morbi tincidunt nulla et dui cursus, ac fermentum justo tincidunt. Suspendisse potenti. Etiam sit amet tellus ut augue dictum varius.</p>

<p>Sed cursus libero ut est finibus, in scelerisque metus vehicula. Nam euismod, felis a eleifend euismod, dui ligula facilisis ex, ut laoreet lectus dui sed nisl. Phasellus in ligula ut purus vehicula fermentum. Quisque venenatis velit sed lectus scelerisque, in pretium eros euismod. Suspendisse dictum sem eu ligula tristique, ac fermentum lacus tempor. Curabitur aliquet vestibulum turpis, non bibendum magna feugiat sed. Morbi quis odio eget eros dictum malesuada. Donec convallis, magna ac suscipit sollicitudin, augue ligula sodales nunc, nec pellentesque lorem sem et mauris.</p>

<p>Sed viverra, lectus sit amet luctus auctor, ipsum odio sagittis justo, ac efficitur sapien orci ut ligula. Duis pretium turpis a sapien scelerisque, et dignissim nunc scelerisque. Nunc sed turpis nec sem auctor gravida nec in tortor. Curabitur a varius neque, ac dapibus mauris. Integer at consectetur lacus. In a augue at arcu facilisis fermentum. Ut congue eros at varius vehicula. Vivamus ultricies ligula eget velit tempus, nec pharetra ligula pharetra.</p>

<p>Mauris tristique tortor in justo pretium, et malesuada risus hendrerit. Proin vehicula ex nec ipsum porttitor, sit amet convallis est bibendum. Quisque venenatis orci nec enim volutpat, non interdum orci lacinia. Nullam vel turpis ut nisl vehicula rutrum. Nullam facilisis libero felis, nec euismod felis tristique in. Nam eu facilisis mi. Vivamus feugiat purus ut magna sodales, non faucibus purus vulputate.</p>

<p>Aenean id urna sit amet lacus interdum condimentum. Curabitur eu tortor viverra, malesuada justo id, lacinia justo. Quisque efficitur volutpat est, vel varius mi consectetur a. Fusce ac dignissim lectus. Etiam ultricies sapien id eros laoreet, et sodales tortor dapibus. Proin vestibulum felis sed ex convallis, eget suscipit nisl volutpat. Integer aliquet felis et sapien volutpat, non aliquam dui laoreet.</p>';

-- Associate products with categories in the category_product table
-- Electronics
INSERT INTO "category_product" ("id_product", "id_category") VALUES
((SELECT id FROM "product" WHERE reference = 'REF001'), (SELECT id FROM "category" WHERE name = 'Mobile Phones')),
((SELECT id FROM "product" WHERE reference = 'REF002'), (SELECT id FROM "category" WHERE name = 'Mobile Phones')),
((SELECT id FROM "product" WHERE reference = 'REF003'), (SELECT id FROM "category" WHERE name = 'Laptops')),
((SELECT id FROM "product" WHERE reference = 'REF004'), (SELECT id FROM "category" WHERE name = 'Televisions')),
((SELECT id FROM "product" WHERE reference = 'REF005'), (SELECT id FROM "category" WHERE name = 'Cameras')),
((SELECT id FROM "product" WHERE reference = 'REF006'), (SELECT id FROM "category" WHERE name = 'Headphones')),
((SELECT id FROM "product" WHERE reference = 'REF007'), (SELECT id FROM "category" WHERE name = 'Mobile Phones'));

-- Clothing
INSERT INTO "category_product" ("id_product", "id_category") VALUES
((SELECT id FROM "product" WHERE reference = 'REF008'), (SELECT id FROM "category" WHERE name = 'Men Clothing')),
((SELECT id FROM "product" WHERE reference = 'REF009'), (SELECT id FROM "category" WHERE name = 'Women Clothing')),
((SELECT id FROM "product" WHERE reference = 'REF010'), (SELECT id FROM "category" WHERE name = 'Kids Clothing')),
((SELECT id FROM "product" WHERE reference = 'REF011'), (SELECT id FROM "category" WHERE name = 'Accessories')),
((SELECT id FROM "product" WHERE reference = 'REF012'), (SELECT id FROM "category" WHERE name = 'Men Clothing')),
((SELECT id FROM "product" WHERE reference = 'REF013'), (SELECT id FROM "category" WHERE name = 'Women Clothing')),
((SELECT id FROM "product" WHERE reference = 'REF014'), (SELECT id FROM "category" WHERE name = 'Kids Clothing'));

-- Home & Kitchen
INSERT INTO "category_product" ("id_product", "id_category") VALUES
((SELECT id FROM "product" WHERE reference = 'REF015'), (SELECT id FROM "category" WHERE name = 'Furniture')),
((SELECT id FROM "product" WHERE reference = 'REF016'), (SELECT id FROM "category" WHERE name = 'Kitchen Appliances')),
((SELECT id FROM "product" WHERE reference = 'REF017'), (SELECT id FROM "category" WHERE name = 'Bedding')),
((SELECT id FROM "product" WHERE reference = 'REF018'), (SELECT id FROM "category" WHERE name = 'Decor')),
((SELECT id FROM "product" WHERE reference = 'REF019'), (SELECT id FROM "category" WHERE name = 'Storage')),
((SELECT id FROM "product" WHERE reference = 'REF020'), (SELECT id FROM "category" WHERE name = 'Furniture')),
((SELECT id FROM "product" WHERE reference = 'REF021'), (SELECT id FROM "category" WHERE name = 'Kitchen Appliances'));

-- Sports & Outdoors
INSERT INTO "category_product" ("id_product", "id_category") VALUES
((SELECT id FROM "product" WHERE reference = 'REF022'), (SELECT id FROM "category" WHERE name = 'Exercise and Fitness')),
((SELECT id FROM "product" WHERE reference = 'REF023'), (SELECT id FROM "category" WHERE name = 'Camping and Hiking')),
((SELECT id FROM "product" WHERE reference = 'REF024'), (SELECT id FROM "category" WHERE name = 'Team Sports')),
((SELECT id FROM "product" WHERE reference = 'REF025'), (SELECT id FROM "category" WHERE name = 'Fan Shop')),
((SELECT id FROM "product" WHERE reference = 'REF026'), (SELECT id FROM "category" WHERE name = 'Camping and Hiking')),
((SELECT id FROM "product" WHERE reference = 'REF027'), (SELECT id FROM "category" WHERE name = 'Cycling')),
((SELECT id FROM "product" WHERE reference = 'REF028'), (SELECT id FROM "category" WHERE name = 'Exercise and Fitness'));
COMMIT;