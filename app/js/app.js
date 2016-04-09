'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [ 'ngRoute',
		'phonecatAnimations',

		'phonecatControllers', 'phonecatFilters', 'phonecatServices' ]);

phonecatApp.config([ 
                     
                     
                     
                     '$routeProvider'
                     ,'$locationProvider'
                     
                     
                     , function($routeProvider, $locationProvider) {
	$routeProvider.when('/signin', {
		templateUrl : 'partials/signin.html',
		controller : 'signin'
	}).when('/crud', {
		templateUrl : 'partials/crud.html',
		controller : 'crud'
	}).when('/main', {
		templateUrl : 'partials/main.html',
		controller : 'main'
	}).when('/', {
		templateUrl : 'partials/main.html',
		controller : 'main'
	}).when('/phones', {
		templateUrl : 'partials/phone-list.html',
		controller : 'PhoneListCtrl'
	}).when('/phones/:phoneId', {
		templateUrl : 'partials/phone-detail.html',
		controller : 'PhoneDetailCtrl'
	}).otherwise({
		redirectTo : '/main'
	});
	

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
	
	
}
                     
                     
                     
                     ]);