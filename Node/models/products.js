var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var products = new Schema({	
	"name" : String,
	"price" : String
});


module.exports = mongoose.model("product_details",products);