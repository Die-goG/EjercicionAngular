var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		controller: "inicio",
		templateUrl: "home.html"
	})
	.when("/nosotros/:name", {
		controller: "nosotros",
		templateUrl: "nosotros.html"
	})
	.otherwise({
		redirectTo: "/home"
	})
});

app.controller("inicio", function($scope){
	$scope.num1 = 4;
	$scope.num2 = 8;
});

app.controller("nosotros", function($scope, $routeParams){
	$scope.nombre = $routeParams.name
});