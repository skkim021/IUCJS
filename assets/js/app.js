var iucApp = angular.module('iucApp', ['ngResource', 'ngRoute', 'iucControllers']);

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
	when('/resource', {
		templateUrl: 'partials/resource.html',
		controller: 'resourceCtrl'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);

iucApp.factory('Student', function($resource) {
	console.log("Inside factory");
	return $resource('http://0.0.0.0:3000/api/students/:id');
});