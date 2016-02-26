var myModule = angular.module('App', []);
myModule.controller('HomeIndex', ['$scope', function($scope) {
  $scope.greeting = {
    text: 'Hello'
  };
}])
