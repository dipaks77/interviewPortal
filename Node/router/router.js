var express = require('express')
var products = require("../controller/products.js");
var menu = require("../controller/menu.js");
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {  
  next()
})

// define the home page route


// GET METHODS
router.get('/all', products.getAll);
router.get("/allByDoc/:doc", products.getAllByDoc);
router.get("/one/:name", products.getOne);
router.get("/oneByDoc/:docWhere/:val/:docTo", products.getOneByDoc);
router.get("/save", products.create);
router.get("/delete/:doc1/:val1/:doc2/:val2", products.remove);
router.get("/edit/:doc1/:val1/:doc2/:val2", products.update);
router.get("/getMenu", menu.getAll);

// POST METHODS
router.post("/addProduct", products.createPost);
router.post("/update", products.updatePost);
router.post("/delete", products.deletePost);

// Exporting Router
module.exports = router