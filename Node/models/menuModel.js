var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuModel = new Schema({	
	"link" : String,
	"text" : String
});


module.exports = mongoose.model("menu_details",menuModel);