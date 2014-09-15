var iucApp = angular.module('iucApp', ['ngRoute', 'iucControllers']);

iucApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	}).
	when('/students', {
		templateUrl: 'partials/students.html',
		controller: 'studentsCtrl'
	}).
	when('/studentprofile/:studentID', {
		templateUrl: 'partials/studentprofile.html',
		controller: 'studentProfileCtrl'
	}).
	when('/schools', {
		templateUrl: 'partials/schools.html',
		controller: 'schoolsCtrl'
	}).
	when('/schoolprofile/:schoolID', {
		templateUrl: 'partials/schoolprofile.html',
		controller: 'schoolProfileCtrl'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);

// iucApp.factory('students', function($resource) {
// 	var studentsService = $resource('/students/:student_id', {}, {
// 		'create': { method: 'POST'},
// 		'index': { method: 'GET', isArray: true },
// 	});
// 	return studentsService;
// });