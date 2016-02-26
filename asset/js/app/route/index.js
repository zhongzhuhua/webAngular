var bookApp = angular.module('bookApp', []);

bookApp.constant('$appList', [{
  index: 0,
  title: '了不起的盖茨比',
  author: ' 菲茨杰拉德'
}, {
  index: 1,
  title: '当你的才华还撑不起你的梦想时',
  author: '特立独行的猫'
}, {
  index: 2,
  title: '不忘初心，方得始终',
  author: '凌茜'
}]);

bookApp.controller('InfoCtrl', ['$scope', '$appList', function($scope, $appList) {
    $scope.info = $appList[0].title;
}]);

bookApp.controller('ListCtrl', ['$scope', '$appList', function($scope, $appList) {
    $scope.books = $appList;
}]);
