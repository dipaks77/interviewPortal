var productModel = require("../models/products");
module.exports = {
	/********************* Get Methods ******************************************
	******************************************************************************/
	getAll : function(req,res){
		
		productModel.find(function(err, data){
			if(err){
				res.status(500).json({status : "Error", message : "Error : " + err, data : ''});
			}else{
				res.status(200).json({status : "Success", message : "Success", products : data});
			}
		});		
	},
	getAllByDoc: function(req,res){
		
		var val = {};
		val[req.params.doc] = "1";
		
		productModel.find({},val,function(err,data){
			if(err){
				res.status(500).json({status: "Error", message: "Error : " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Success", products: data});
			}
		});
	},
	getOne: function(req,res){

		productModel.find(req.params,function(err, data){
			if(err){
				res.status(500).json({status : "Error", message : "Error : " + err, data : ''});
			}else{
				res.status(200).json({status : "Success", message : "Success", products : data});
			}
		});
	},
	getOneByDoc : function(req,res){

		var val = {};
		val[req.params.docWhere] = req.params.val;
		var doc = {};
		doc[req.params.docTo] = "1";
		
		productModel.find(val,doc,function(err,doc){
			if(err){
				res.status(500).json({status: "Error", message: "Error : " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Success", products: doc});
			}
		});
	},
	create: function(req,res){

		var product = new productModel(req.query);		
		product.save(function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error Occured " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Added!", products : ''})
			}
		});
	},
	remove: function(req,res){

		var prm = {};
		prm[req.params.doc1] = req.params.val1;
		prm[req.params.doc2] = req.params.val2;
		
		productModel.remove(prm, function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error " + err, products : ''});
			}else{
				res.status(200).json({status: "Success", message: "Removed Successfully!", products : ''});
			}
		});
	},
	update: function(req,res){

		var prm = {};
		prm[req.params.doc1] = req.params.val1;
		prm[req.params.doc2] = req.params.val2;		
		
		productModel.update(prm,req.query,function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error " + err, products : ''});
			}else{
				res.status(200).json({status: "Success", message: "Updated!", products: req.query});
			}
		})
	},

	/********************* Post Methods ******************************************
	******************************************************************************/

	// For Inserting New Product
	createPost: function(req,res){		
		var product = new productModel(req.body);
		product.save(function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error Occured " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Added!", products : ''});
			}
		});
	},

	// For Updating Product
	updatePost: function(req,res){
		var where = req.body.id;
		var set = {
			name : req.body.name,
			price : req.body.price
		}		
		productModel.update(where,set,function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error Occured " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Updated!", products : ''});
			}
		});
	},

	// For Removing Product
	deletePost: function(req,res){

		productModel.remove(req.body, function(err){
			if(err){
				res.status(500).json({status: "Error", message: "Error Occured " + err, products: ''});
			}else{
				res.status(200).json({status: "Success", message: "Deleted!", products : ''});
			}
		})
	}
};