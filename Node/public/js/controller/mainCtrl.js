var app = angular.module("mainCtrl", ["mainFact"]);

app.controller("MenuCtrl", function($scope, MenuFactory){
	$scope.menus = [];
	MenuFactory.menuList(function(MenuFactory){
		$scope.menus = MenuFactory.data.data;
	})
});

app.controller("HomeCtrl", function($scope, MenuFactory){
	$scope.menus = [];
	MenuFactory.menuList(function(MenuFactory){
		$scope.menus = MenuFactory.data.data;
	})
});


app.controller("AddProductCtrl", function($scope, MenuFactory){
	$scope.menus = [];
	MenuFactory.menuList(function(MenuFactory){
		$scope.menus = MenuFactory.data.data;
	})
});

app.controller("UpdateProductCtrl", function($scope, MenuFactory){
	$scope.menus = [];
	MenuFactory.menuList(function(MenuFactory){
		$scope.menus = MenuFactory.data.data;
	})
});