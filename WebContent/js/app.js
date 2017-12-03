/**
 * Angular js Module
 */
var app=angular.module('app',['ngRoute'])
// 1st parameter is module name
// 2nd parameter is Array of dependent modules. [] -> no dependent modules
app.config(function($routeProvider){
	$routeProvider
	.when('/persons',{
		templateUrl:'persons.html',
		controller:'PersonCtrl'
	
	})
	
	.when('/personform',{
		templateUrl:'personform.html',
		controller:'PersonCtrl'
	
	})
	
	.when('/employees',{
		templateUrl:'employees.html',
		controller:'EmployeeCtrl'
	
	})
	
	.otherwise({templateUrl:'home.html'})
})
