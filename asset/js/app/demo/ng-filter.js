function ListCtrl($scope) {
  $scope.departName = 'IT';
  $scope.names = ['zhong', 'zhu', 'hua'];
};

function MoneyCtrl($scope) {
  $scope.money = 2.30
};

function OrderCtrl($scope) {
  $scope.students = [{
    name: '小钟',
    mark: 70
  },{
    name: '小渚',
    mark: 90
  },{
    name: '小华',
    mark: 80
  }];
};
