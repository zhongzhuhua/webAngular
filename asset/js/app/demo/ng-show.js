var myModule = angular.module('App', []);
myModule.controller('Index', ['$scope', function($scope) {
  $scope.menuStatus = {
    show: false
  };
  $scope.toggleMenu = function() {
    $scope.menuStatus.show = !$scope.menuStatus.show;
  };
}]);
