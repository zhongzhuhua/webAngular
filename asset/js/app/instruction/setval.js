var myModule = angular.module('App', []);

myModule.controller('MyCtrl', ['$scope', function($scope) {
  $scope.ctrlFlavor = '百威';

  $scope.sayHello = function(name) {
    console.log('hello,' + name);
  };
}]);

myModule.directive('hello', function() {
  return {
    restrict: 'AE',
    scope: {},
    template: '<div><input ng-model="name" /><span ng-bind="name"></span></div>'
  };
});

myModule.directive('drink', function() {
  return {
    restrict: 'AE',
    scope: {
      flavor : '@'
    },
    template: '<div><input ng-model="flavor" /></div>'
  };
});

myModule.directive('drink2', function() {
  return {
    restrict: 'AE',
    scope: {
      flavor : '=',
      greet : '&'
    },
    template: '<div><input ng-model="flavor" /><button ng-click="greet({name: flavor})">sayHello</button></div>'
  };
});
