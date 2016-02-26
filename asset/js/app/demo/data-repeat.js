function GreetCtrl($scope, $rootScope) {
  $scope.name = 'World';
  $rootScope.departname = 'Angular';
}

function ListCtrl($scope) {
  $scope.names = ['zhong', 'zhu', 'hua'];
}
