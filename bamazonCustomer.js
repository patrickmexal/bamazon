var mysql = require("mysql");
var prompt = require("prompt");
var inquirer = require("inquirer");
var table = require("cli-table");
var productsPurchased = [];

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon", 
});

connection.connect();

connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products', function(err, result){
    if(err) console.log(err);
    else console.log(result);
});
