var myModule = angular.module('App', []);
myModule.controller('UserInfoCtrl', ['$scope', function($scope) {
  $scope.userInfo = {
    email: '6729869035@qq.com',
    password: '123456',
    autoLogin: true,
  };

  $scope.getFormData = function() {
    console.log($scope.userInfo);
  };

  $scope.setFormData = function() {
    $scope.userInfo = {
      email: 'zhuhua_zhong@126.com',
      password: 'zhongzhuhua',
      autoLogin: false,
    };
  };

  $scope.resetFormData = function() {
    $scope.userInfo = {
      email: '6729869035@qq.com',
      password: '123456',
      autoLogin: true,
    };
  };
}]);
