var app = angular.module("myApp", ["ngRoute","mainCtrl"]);

app.config(function( $routeProvider ){
	$routeProvider
		.when("/",{
			redirectTo : "/home"
		})
		.when("/home",{
			templateUrl : "home.html",
			controller : "HomeCtrl"
		})
		.when("/addProduct",{
			templateUrl : "addproduct.html",
			controller : "AddProductCtrl"
		})
		.when("/updateProduct",{
			templateUrl : "updateProduct.html",
			controller : "UpdateProductCtrl"
		})
		.otherwise({
			redirectTo : "/home"
		})
});