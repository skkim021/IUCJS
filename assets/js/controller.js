var iucControllers = angular.module("iucControllers", []);

// ACTUAL LINK:
// http://www.corsproxy.com/iuc-backend.herokuapp.com/schools/1.json

// Home.
iucControllers.controller("homeCtrl", function($scope, Student, $location) {
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
iucControllers.controller("studentsCtrl", function($scope, Student) {
	var students = Student.query();
	$scope.students = students;
	$scope.orderStudents = 'last_name';
});

iucControllers.controller("studentProfileCtrl", function($scope, Student, School, $routeParams) {
	var students = Student.query();
	$scope.students = students;
	$scope.whichStudent = $routeParams.studentID;

	var schools = School.query();
	$scope.schools = schools;
	$scope.whichSchool= $routeParams.schoolID;

	$scope.editStudents = students;
	$scope.updateStudent = function(student) {
		console.log(student.first_name + " " + student.last_name);
		student.$update();
	};
});

// Schools.
iucControllers.controller("schoolsCtrl", function($scope, School) {
	var schools = School.query();
	$scope.schools = schools;
	$scope.orderSchools = 'name';
});

iucControllers.controller("schoolProfileCtrl", function($scope, School, $routeParams) {
	var schools = School.query();
	$scope.schools = schools;
	$scope.whichSchool= $routeParams.schoolID;
});