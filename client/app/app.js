'use strict';

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
		let nextId = 1;

		const loadPage = () => {
			$http
			.get('/api/getTableOneItems')
			.then((data) => {
				$scope.items = data.data;
				nextId = $scope.items.length + 1;
			})
		}

		loadPage();

		$scope.addItem = () => {
			const value1 = `row${nextId}Value1`;
			const value2 = `row${nextId}Value2`;
			const newItem = {
				ColumnOne: value1,
				ColumnTwo: value2
			};
			$http
				.post('/api/addItem', newItem)
				.then((data) =>{
					loadPage();
				})
				.catch(console.error)
		}

	})
