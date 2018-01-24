var config = {
	port: 8080,
	base_url : "http://localhost/myApp",
	mongo:{
		host : "localhost",
		port : '27017',
		database : "db_product"
	}	
}
config.mongo.url = "mongodb://" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.database;

module.exports = config;