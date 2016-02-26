var myModule = angular.module('App', []);

myModule.controller('MyCtrl', ['$scope', function($scope) {
  $scope.loadData = function() {
    console.log('数据加载中...');
  };
  $scope.loadEnd = function() {
    console.log('数据加载完毕...');
  };
}]);

// 定义 hello 标签
myModule.directive('hello', function() {
  return {
    restrict: 'AE',
    template: '<div>This is my order!</div>',
    replace: true
  };
});

// 定义 hi 标签
myModule.directive('hi', function() {
  return {
    restrict: 'E',
    template: '<div>This is my order!<div ng-transclude></div></div>',
    transclude: true,
    link: function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        scope.loadData();
      });
      element.bind('mouseover', function() {
        console.log(attrs.mydata);
        scope.$apply('loadEnd()');
      });
    }
  };
});

// 定义 superman 标签
myModule.directive('superman', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    controller: function($scope) {
      $scope.abilities = [];
      this.addPower = function() {
        $scope.abilities.push('power');
      };
      this.addSpeed = function() {
        $scope.abilities.push('speed');
      };
      this.addLight = function() {
        $scope.abilities.push('light');
      };
    },
    link: function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        console.log(scope.abilities);
      });
    }
  };
});

myModule.directive('light', function() {
  return {
    restrict: 'A',
    require: '^superman',
    link: function(scope, element, attrs, supermanCtrl) {
      element.bind('mouseenter', function() {
        supermanCtrl.addLight();
      });
    }
  };
});
