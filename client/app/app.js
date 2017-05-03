'use strict';

console.log("welcome to app.js");

angular
	.module('TemplateApp', ['ngRoute'])
	.config($routeProvider =>
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: 'partials/main.html'
			})
	)
	.controller('MainCtrl', function($scope, $http) {
		console.log("main");
		$scope.data = 'testing'
		// $http
		// 	.get('/api/getTableOne')
		// 	.then((data) =>
		// 		$scope.data = data
		// 	)
	})
