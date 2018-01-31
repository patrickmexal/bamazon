/* Set Global Variables */
var mysql = require("mysql");
var prompt = require("prompt");
var inquirer = require("inquirer");
var desiredPurchase = "";
var desiredQuantity = 0;


/* Two Functions to run the CLI inquiry */
function inquireForPurchase() {

    inquirer.prompt([ {
        name: "whatDoYouWant",
        message: "What would you like to buy today?",
        type: "list",
        choices: ["Macbook Pro", "Sony A7", "Timex Weekender Chronograph", "Iphone X", "Google Pixel", "Sony A6000", "Fuji X-T2", "Macbook Air", "Sony NEX-5N", "Apple Watch"]
    }, {
        name: "howManyDoYouWant",
        message: "How many of your chosen item do you wish to buy?",
        type: "input",
        choices: ""
    },
    ]).then(function(answers) {
          var desiredPurchase = answers.whatDoYouWant;
          var desiredQuantity = answers.howManyDoYouWant;
          bamazonPurchase(desiredPurchase, desiredQuantity);
    });
};


inquireForPurchase();

/* MySQL connection */
 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon",
});

connection.connect();

connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products', function(err, result) {
    if (err) console.log(err);
    //else console.log(result);
});

console.log(stock_quantity);
/* MySQL Purchase Query */
function bamazonPurchase(desiredQuantity, desiredPurchase) {
    connection.query("SELECT * FROM products WHERE product_name" + desiredPurchase, function(error, response) {
        if (desiredQuantity <= response[0].stock_quantity) {
            console.log("On the way my friend!");
        } else {
            console.log("Sorry, we don't have the quantity to fill that order.")
        };
    });
};




