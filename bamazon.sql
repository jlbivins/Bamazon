DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INT auto_increment,
product_name VARCHAR(30),
department varchar(30),
price INT NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("shovel", "tools", 10, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("baseball", "sports", 5, 2);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("footballs", "sports", 5, 5);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("shirts", "clothes", 5, 5);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("driver", "sports", 1, 1);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("putter", "sports", 100, 2);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("lawn mower", "tools", 150, 2);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("bed", "furniture", 500, 1);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("saxophone", "music", 4999, 1);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("apple", "computer", 1200, 1);

SELECT * FROM products;




