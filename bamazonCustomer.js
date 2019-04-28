var mysql = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
   host: "127.0.0.1",
   post: 3306,
   user: "root",
   password: "root",
   database: "bamazon"
});

connection.connect(function(err){
     if(err) throw err;
     console.log("Connected as ID " + connection.threadID);
     getAll();
});   
    const getAll = function() {
     connection.query("SELECT * FROM products", function(err, result){
      if (err) throw err;
         console.table(result);
         connection.end(); 
      buyer_prompts();    
    });
    
    function buyer_prompts(){
      inquirer
      .prompt({
        name: "id",
        type: "input",
        message: "What is the id of product you would like to buy?"
      })
    }
    
    }

    // function getAll() {
    //     console.log("Inserting a item in playlist...\n");
    //     var query = connection.query(
    //       "INSERT INTO playlist SET ?",
    //       {
    //         title: "7 rings",
    //         artist: "ariana grande",
    //         genre: "pop"
    //       },
    //       function(err, res) {
    //         console.log(res.affectedRows + " product inserted!\n");
    //         // Call updateProduct AFTER the INSERT completes
    //         updateProduct();
    //       }
    //     );
      
    //     // logs the actual query being run
    //     console.log(query.sql);
    //   }
      
    //   function updateProduct() {
    //     console.log("Updating playlist...\n");
    //     var query = connection.query(
    //       "UPDATE playlist SET ? WHERE ?",
    //       [
    //         {
    //           artist: 
    //         },
    //         {
    //           flavor: "Rocky Road"
    //         }
    //       ],
    //       function(err, res) {
    //         console.log(res.affectedRows + " products updated!\n");
    //         // Call deleteProduct AFTER the UPDATE completes
    //         deleteProduct();
    //       }
    //     );
      
    //     // logs the actual query being run
    //     console.log(query.sql);
    //   }
      
    //   function deleteProduct() {
    //     console.log("Deleting all strawberry icecream...\n");
    //     connection.query(
    //       "DELETE FROM products WHERE ?",
    //       {
    //         flavor: "strawberry"
    //       },
    //       function(err, res) {
    //         console.log(res.affectedRows + " products deleted!\n");
    //         // Call readProducts AFTER the DELETE completes
    //         readProducts();
    //       }
    //     );
    //   }
      
    //   function readProducts() {
    //     console.log("Selecting all products...\n");
    //     connection.query("SELECT * FROM products", function(err, res) {
    //       if (err) throw err;
    //       // Log all results of the SELECT statement
    //       console.log(res);
    //       connection.end();
    //     });
      // }