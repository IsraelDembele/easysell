var mysql = require("mysql");
var inquirer = require("inquirer"); 
var Table = require ('cli-table');

var connection = mysql.createConnection({
    host : "localhost",
    port : 3306, 
    user: "root",
    password :"password", 
    database : "bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    viewProduct();
});
function viewProduct(answer){ 
    var query = "SELECT id, product_name, price,department_name,stock_quantity FROM products";
    connection.query(query,  function(err, res) {
      if(err){
        console.log(err);
      }
      var theDisplayTable = new Table({
        head: ['ID', 'Product Name', 'department_name', 'Price', 'Quantity'],

          colWidths: [10, 30, 15, 10, 14] 
        });

        for (var i = 0; i < res.length; i++) {
           theDisplayTable.push(
            [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
         }
            console.log(theDisplayTable.toString());


      checkout();
    });
}
//Pick a product and how many
function checkout() {
  inquirer.prompt([
    {
      name: "userChoice",
      type: "input",
      message: "Enter the ID of the item you would like to purchase"
    },
    {
      name: "number",
      type: "input",
      message: "How many would you like to buy?"
    }

    ]).then(function(answer){
     // console.log(answer);
     // console.log(answer.number);
     // console.log(answer.userChoice);
      var query = "SELECT * FROM products WHERE id = "+answer.userChoice;
      connection.query(query, function(err, response){
        if(err){
          console.log(err);
        }
        if(response.length < 1){
          console.log('please choose from the list');
        } else{
        //  console.log(response);
        //  console.log(response[0].stock_quantity);
          if (answer.number <= response[0].stock_quantity) {
           // console.log("you got it"); 
            var newQuatity = response[0].stock_quantity - answer.number
            var command = "UPDATE products SET stock_quantity = "+newQuatity+" WHERE id = "+answer.userChoice;
            connection.query(command, function(err, res){
              if (err){
                console.log(err);
              } 
              console.log("order placed!");
              console.log("Item: ");
              console.log('Product Name: '+response[0].product_name);
              console.log('Price: '+response[0].price);
              console.log('Quatity: '+answer.number);
              viewProduct();
              checkout(answer);
            })
          } 
          else { 
            console.log ("sorry! out of stock");
            viewProduct();
            checkout(answer);
          }
        }
      });
    })
    
    // .then(function(answer) {
    //     connection.query("SELECT id,product_name,department_name,price,stock_quantity FROM products WHERE ?",
    //       {id: answer.item},  function(err, res) {

    //         //console.log("count " + answer.count);

    //         if (parseInt(answer.count) > res[0].stock_quantity) {

    //           console.log("sorry, there are only " + res[0].stock_quantity + " left");
    //           checkout();

    //         }

    //         else {
    //           console.log("Your purchase of " + answer.count + ' ' + res[0].product_name +"/s total cost is: $ " + parseInt(res[0].price) * parseInt(answer.count));
    //          var quantityLeft = res[0].stock_quantity - answer.count;
    //                 console.log(quantityLeft);
    //                 connection.query(
    //                   "UPDATE products SET ? WHERE ?",
    //                   [
    //                     {
    //                       stock_quantity: quantityLeft
    //                     },
    //                     {
    //                       id: answer.item
    //                     }
    //                   ],
    //                   function(error) {
    //                     if (error) throw err;
                       
                       
    //                   }); 
    //                 console.log("Inventory updated. There are  " + quantityLeft + " left"); 
    //                 viewProducts();
    //          }


    //       })
    // });

};      



    

