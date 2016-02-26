var myModule = angular.module('App', []);
myModule.controller('CssCtrl', ['$scope', function($scope) {
  $scope.color = 'red';
  $scope.setColor = function(color) {
    $scope.color = color;
  };
}]);
