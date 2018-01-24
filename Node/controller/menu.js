var menuModel = require("../models/menuModel");

module.exports = {
	getAll : function(req,res){

		menuModel.find(function(err, doc){
			if(err){
				res.status(500).json({status: "Error", message: "Error " + err, menus : ''});
			}else{
				res.status(200).json({status: "Success", message : "Success", menus : doc});
			}
		});
	}
};