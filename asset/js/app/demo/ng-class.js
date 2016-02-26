var myModule = angular.module('App', []);
myModule.controller('Index', ['$scope', function($scope) {
  $scope.isError = false;
  $scope.isWarning = false;
  $scope.showError = function() {
    $scope.messageText = 'This is an error';
    $scope.isError = true;
    $scope.isWarning = false;
  };
  $scope.showWarning = function() {
    $scope.messageText = 'Just a warning!';
    $scope.isWarning = true;
    $scope.isError = false;
  };
}]);
