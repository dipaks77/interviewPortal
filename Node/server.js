// Packages
var express 			= require('express');
var config 				= require("./config/config");
var bodyParser 			= require("body-parser");
var mongoose 			= require("mongoose");
var router 				= require("./router/router");

// Declaration of handlers
var app = express();
var db;


// Initializing app
app.use(bodyParser.json());
app.set("port", config.port);
app.use(express.static("uploads"));

// Database config
mongoose.connect(config.mongo.url, function(err, database){
	if(err){
		console.log(err);
		process.exit();
	}else{
		db = database;
		console.log("Database Connected!");
	}
});

// Setting up headers
app.all("/*", function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key');

	if(req.method == "OPTIONS"){
		res.status(200).end();
	}else{
		next();
	}
});

// Setting up Route
app.use("/", router);

app.use(function(req,res,next){
	res.status(404).json({status: "Page Not Found"}).end();
});



// Setting up server configs
var server = app.listen(app.get("port"), function(){
	var port = server.address().port
	console.log("Server is running on port " + port);
});