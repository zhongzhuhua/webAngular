var myModule = angular.module('routeApp', ['bookApp']);

myModule.config(function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: '/htmls/route/list.html',
        controller: 'ListCtrl'
    }).when('/info', {
        templateUrl: '/htmls/route/info.html',
        controller: 'InfoCtrl'
    }).otherwise({
        redirectTo: '/list'
    })
});
