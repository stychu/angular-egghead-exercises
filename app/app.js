(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/details/:brand/:capacity', {
                templateUrl: 'views/details.html',
                controller: 'routeCtrl'
            })
            .when('/secret', {
                templateUrl: 'views/secret.html'
            })
            .when('/inputs/:brand/:capacity', {
                redirectTo: function ($routeParams) {
                    if ($routeParams.brand === 'secret' || $routeParams.capacity === 'secret') {
                        return "/secret"
                    }
                    return "/details/" + $routeParams.brand + '/' + $routeParams.capacity
                }
            })
            .when('/inputs/:brand', {
                redirectTo: function ($routeParams) {
                    if ($routeParams.brand === 'secret') {
                        return "/secret"
                    }
                    return '/'
                }
            })
            .when('/inputs//:capacity', {
                redirectTo: function ($routeParams) {
                    if ($routeParams.capacity === 'secret') {
                        return "/secret"
                    }
                    return '/'
                }
            })

    });

    app.controller('homeCtrl', function ($scope)
    {
        $scope.car = {brand: 'Ferrari', capacity: 3.5};
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
