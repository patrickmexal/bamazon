var mysql = require("mysql");
var prompt = require("prompt");
var table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon", 
});
