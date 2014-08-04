var app = angular.module("root", [])
				.controller('index', ['$scope', function($scope) {
					$scope.submit = function() {
						console.log($scope.user);
					}
				}]);
