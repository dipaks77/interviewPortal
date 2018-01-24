var app = angular.module("mainFact", []);

app.factory("MenuFactory", function($http){
	function getMenus( callback ){
		$http.get("http://localhost:8080/getMenu").then( callback );
	}

	return{
		menuList : getMenus
	}
});