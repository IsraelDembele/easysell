## bamazon 

## overview 
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents the  customer interface. 

MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.

Customer Interface
The customer interface allows the user to view the current inventory of store items: item ID, product name, price, department,and stock quantity. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price , item name, quantity and updating the store database. If the desired quantity is not available, a message is display to the user.

To run the program please follow the steps below:

node bamazonCustomer.js
choose id;
choose quantity;

(Don't forget to run 'npm install' after cloning this project!!!)
Bamazon Demo
