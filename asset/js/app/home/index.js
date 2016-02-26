var myModule = angular.module('HomeIndex', []);
myModule.controller('HomeIndex', ['$scope', function($scope) {
  $scope.greeting = {
    text: 'Hello'
  };
}]);
