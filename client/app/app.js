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
				.then((data) =>
					loadPage()
				)
				.catch(console.error)
		}

		$scope.delItem = (id) => {
			$http
				.delete(`/api/delItem/${id}`)
				.then((data) =>
					loadPage()
				)
				.catch(console.error)
		}

		$scope.editItem = (id, column) => {
			let updateItemObj;
			let date = Date.now().toFixed();
			let dateNew = new Date(parseInt(date)).toString();
			if (column == 1) {
				updateItemObj = {
					ColumnOne: 'updated: ' + dateNew
				}
			} else {
				updateItemObj = {
					ColumnTwo: 'updated: ' + dateNew
				}
			}
			$http
				.put(`/api/editItem/${id}`, updateItemObj)
				.then((data) => {
					loadPage()
				})
				.catch(console.error)
		}

	})




