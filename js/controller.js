var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
	$scope.master = {countryName:"United States", stateName:"California"};
	$scope.reset = function() {
		$scope.country = angular.copy($scope.master);
	};
	$scope.reset();
});