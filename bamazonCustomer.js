var mysql = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  post: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  // console.log("Connected as ID " + connection.threadID);
  getAll();
});
const getAll = function () {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.table(result);

    buyer_prompts(result);
  });

  function buyer_prompts(result) {
    inquirer
      .prompt([{
        name: "id",
        type: "input",
        message: "What is the id of product you would like to buy?"
      }, {
        name: "quantity",
        type: "input",
        message: "How many do you want to buy?"
      }
      ]).then(function (answer) {
        //console.log(answer)
        //console.log(result);
        for (let i = 0; i < result.length; i++) {
          var current_item = result[i];
          if (current_item.item_id == answer.id) {
            console.log("current item", current_item.item_id);
            if (current_item.stock_quantity >= answer.quantity) {
              var query_string = `UPDATE products SET stock_quantity = stock_quantity -  ${answer.quantity} WHERE item_id = 
                               ${answer.id}`
              connection.query(query_string, function (err, data) {
                console.log("Thank you for your order, total = ", answer.quantity * current_item.price);
                connection.end()
              })

            }
            else {
              console.log("insufficent quantity");
              connection.end();
            }
            break;
          }


        }
      })

  }

}

