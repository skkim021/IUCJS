var app = angular.module('iucApp', []);

app.controller('iucCtrl', function($scope) {
	$scope.test = "Hello World!";
});

app.controller('fetchCtrl', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.method = 'GET';
		$scope.url = 'schools.html';

		$scope.fetch = function() {
			$scope.code = null;
			$scope.response = null;
			
			$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
				success(function(data, status) {
					$scope.status = status;
					$scope.data = data;
				}).
				error(function(data, status) {
					$scope.data = data || "Request failed";
					$scope.status = status;
				}); 
		};

		$scope.updateModel = function(method, url) {
			$scope.method = method;
			$scope.url = url;
		}
}]);

$(document).ready(function() {
	$("#fullpage").fullpage({
		verticalCentered: true,
		resize: true,
		sectionsColor: ['#ff5555', '#77dd77', '#ccc', '#fff'],
		anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
		scrollingSpeed: 400,
	});
});