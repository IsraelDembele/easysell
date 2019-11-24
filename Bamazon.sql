DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(355),
  price DECIMAL (4,0) ,
  department_name VARCHAR(350), 
  stock_quantity INT,
  PRIMARY KEY (id)
  ); 
  
SELECT * FROM products WHERE id = 9;
SELECT * FROM products WHERE id = 4;
  UPDATE products SET stock_quantity = 13 WHERE id = 4; 
  SELECT * FROM products;
SELECT id, product_name, price,department_name,stock_quantity FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", 'electronic', 800, 20); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tablet", 'electronic', 200, 12); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone", 'electronic', 700, 8); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", 'electronic', 1000, 4); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", 'electronic', 100, 3); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("matress", 'furniture', 300, 2); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("microwav", 'furniture', 200, 7); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("refrigerator", 'furniture', 400, 7); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk", 'furniture', 300, 3); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("oven", 'furniture', 200, 8);
SELECT * FROM products;
 
 
 
 
