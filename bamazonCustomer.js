const mysql = require("mysql");

Const connection  = mysql.createConnection ({
	host: “localhost”,
	port: 3306,
	user: “”,
	password: “”,
	database: “bamazon”
});

connection.connect(function(err)  {
	if(err) throw err;
	console.log(“connected as id” + connection.threadId);
});


const readDatabase = () => {
	connection.query(“select * from products”, (err, res) =>
	{
		if (err) throw err;
		console.log(res);
		connection.end();
	});
}
