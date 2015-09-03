(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'views/product.html', controller: 'catchErrorCtrl'
        });
        $routeProvider.when('/order', {
            templateUrl: 'views/order.html', resolve: {error: error}
        });
        $routeProvider.when('/displayOrder', {
            templateUrl: 'views/order.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    var productCatch;

    app.controller('catchErrorCtrl', function ($scope)
    {
        $scope.product = {name: 'tomato soup'};

        $scope.$watch('product', function (newValue)
        {
            productCatch = newValue;
        });
    });

    app.controller('OrderCtrl', function ($rootScope, $location, $scope)
    {

        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {

            if (rejection.quantity == null || rejection.price == null) {
                $scope.rejectProduct = {name: rejection.name, cost: 0};
                $scope.class = 'alert alert-danger';
                $scope.message = 'You give wrong data';
                $location.path('/displayOrder')
            }
            else {
                $scope.rejectProduct = {name: rejection.name, cost: rejection.quantity * rejection.price};
                $scope.class = 'alert alert-success';
                $scope.message = 'You give correct data';
                $location.path('/displayOrder')
            }
        })

    });

    var error = function ($q) {
        var defer = $q.defer();
        defer.reject(productCatch);
        return defer.promise;
    };


})();
