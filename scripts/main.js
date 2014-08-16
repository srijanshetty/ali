var app = angular.module("root", [])
				.controller('index', ['$scope', '$http', function($scope, $http) {
					$scope.submit = function() {
						console.log($scope.user);
						$http({
							method: 'POST',
							url: 'register.php',
							data: $scope.user
						})
						.success(function() {
							console.log('success');
						})
						.error(function() {
							console.log('fail');
						});
					}
				}]);
