var iucControllers = angular.module("iucControllers", []);

// ACTUAL LINK:
// http://www.corsproxy.com/iuc-backend.herokuapp.com/schools/1.json

// Students.
iucControllers.controller("studentsCtrl", ['$scope', '$http', function($scope, $http) {
	$http.get('assets/js/students.json').
		success(function(data) {
			$scope.students = data.students;
			$scope.orderStudents = 'last_name';
		}).
		error(function(data) {
			$scope.data = data || "Request failed";
		});

	// $scope.addStudent = function() {
	// 	var newStudent = {
	// 		first_name: $scope.newStudentFirstName,
	// 		last_name: $scope.newStudentLastName
	// 	};

	// 	var ns = new Students({ student: newStudent });
	// 	ns.$create(function() {
	// 		$scope.students.push(ns);
	// 		$scope.newStudentFirstName = "";
	// 		$scope.newStudentLastName = "";
	// 	})
	// }
}
// studentsCtrl.$inject = ['$scope', '$http', 'Students'];

]);

iucControllers.controller("studentProfileCtrl", ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
	$http.get('assets/js/students.json').
		success(function(data) {
			$scope.students = data.students;
			$scope.whichStudent = $routeParams.studentID;
		}).
		error(function(data) {
			$scope.students = data || "Request failed";
		});
}]);

// Schools.
iucControllers.controller("schoolsCtrl", ['$scope', '$http', function($scope, $http) {
	$http.get('assets/js/schools.json').
		success(function(data) {
			$scope.schools = data.schools;
			$scope.orderSchools = 'name';
		}).
		error(function(data) {
			$scope.schools = data || "Request failed";
		});
}]);

iucControllers.controller("schoolProfileCtrl", ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
	$http.get('assets/js/schools.json').
		success(function(data) {
			$scope.schools = data.schools;
			$scope.whichSchool = $routeParams.schoolID;
		}).
		error(function(data) {
			$scope.schools = data || "Request failed";
		});
}]);