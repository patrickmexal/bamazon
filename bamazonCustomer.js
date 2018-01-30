var mysql = require("mysql");
var prompt = require("prompt");
var inquirer = require("inquirer");
var table = require("cli-table");
var productsPurchased = [];



function inquireForPurchase() {

    inquirer.prompt({
        name: "whatDoYouWant",
        message: "What would you like to buy today?",
        type: "list",
        choices: ["Macbook Pro", "Sony A7", "Timex Weekender Chronograph", "Iphone X", "Google Pixel", "Sony A6000", "Fuji X-T2", "Macbook Air", "Sony NEX-5N", "Apple Watch"]
    }, {
        name: "howManyDoYouWant",
        message: "How many of your chosen item do you wish to buy?",
        type: "input",
        choices: []
    }).then(function(answers) {
        let desiredPurchase = answers.whatDoYouWant;
        let desiredQuantity = answers.howManyDoYouWant;
    });
};

inquireForPurchase();

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
