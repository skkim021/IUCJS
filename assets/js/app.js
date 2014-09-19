var iucApp = angular.module('iucApp', ['ngResource', 'ngRoute', 'iucControllers']);

iucApp.config(['$routeProvider', function($routeProvider) { 

	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	}).
	when('/criteria1', {
		templateUrl: 'partials/criteria1.html',
		controller: 'criteria1Ctrl'
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
	return $resource('http://iuc-backend.herokuapp.com/api/students/:id', {id: '@id'}, {
		update: {
			method: 'PATCH'
		}
	});
});

iucApp.factory('School', function($resource) {
	return $resource('http://iuc-backend.herokuapp.com/api/schools/:id');
});