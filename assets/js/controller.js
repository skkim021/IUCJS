var iucControllers = angular.module("iucControllers", []);

// ACTUAL LINK:
// http://www.corsproxy.com/iuc-backend.herokuapp.com/schools/1.json

// Home.
iucControllers.controller("homeCtrl", ['$scope', '$http', function($scope, $http) {

}]);

// Criteria1.
iucControllers.controller("criteria1Ctrl", function($scope, Student, $location) {
	$scope.newStudent = new Student();

	var students = Student.query( function() {
		console.log(students.length);
		// Post
		$scope.addStudent = function() {
			Student.save($scope.newStudent);
			$scope.newStudent = new Student();
			setTimeout(function(){}, 3000);
			$location.path("/studentprofile/" + students.length);

		};
	});

});

// NGResource Test.
iucControllers.controller('resourceCtrl', function($scope, Student) {
	$scope.newStudent = new Student();

	console.log("Inside controller");
	$scope.id = 4;
	
	var student = Student.get({id: $scope.id }, function() {
		console.log("student #1: " + student);
	}); // get() returns a single entry

	var students = Student.query(function() {
		console.log("students: " + students);
	}); // query() returns all entries

	$scope.student = student;
	$scope.students = students;

	$scope.getStudent = function() {
		console.log("inside function get students");
		student = Student.get({id: $scope.id }, function() {
			console.log("student #1: " + student);
		}); // get() returns a single entry
		$scope.student = student;
	};

	// Post
	$scope.addStudent = function() {
		// console.log("inside function add student");
		// console.log("prev student: " + $scope.student);
		// $scope.student = new Student();
		// $scope.student.first_name = "Jon";
		// console.log($scope.student);
		
		Student.save($scope.newStudent);
		$scope.students = Student.query();
		$scope.newStudent = new Student();
		$scope.$apply();
	};

});

// Students.
iucControllers.controller("studentsCtrl", ['$scope', '$http', function($scope, $http) {
	$http.get('http://0.0.0.0:3000/api/students').
		success(function(data) {
			$scope.students = data;
			$scope.orderStudents = 'last_name';
		}).
		error(function(data) {
			$scope.data = data || "Request failed";
		});

	// Post
	$scope.addStudent = function() {
		console.log("inside function add student");
		
		$scope.student = new Object();
		$scope.student.first_name = "Ruby";
		console.log("created new student");
		
		$http({
		    url: "http://0.0.0.0:3000/api/students",
		    dataType: "json",
		    method: "POST",
		    data: {"first_name": "Ruby"},
		    headers: {
		        "Content-Type": "application/json"
		    }
		}).success(function(response){
		    $scope.response = response;
		}).error(function(error){
		    $scope.error = error;
		});
	};
}]);

iucControllers.controller("studentProfileCtrl", ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$http.get('http://0.0.0.0:3000/api/students').
			success(function(data) {
				$scope.students = data;
				$scope.whichStudent = $routeParams.studentID;
			}).
			error(function(data) {
				$scope.students = data || "Request failed";
			});

		$http.get('http://0.0.0.0:3000/api/schools').
			success(function(data) {
				$scope.schools = data.schools;
				$scope.orderSchools = 'name';
			}).
			error(function(data) {
				$scope.schools = data || "Request failed";
			});
}]);

// Schools.
iucControllers.controller("schoolsCtrl", ['$scope', '$http', function($scope, $http) {
	$http.get('http://0.0.0.0:3000/api/schools').
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
	$http.get('http://0.0.0.0:3000/api/schools').
		success(function(data) {
			$scope.schools = data.schools;
			$scope.whichSchool = $routeParams.schoolID;
		}).
		error(function(data) {
			$scope.schools = data || "Request failed";
		});
}]);