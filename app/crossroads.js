'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'views/crossroads.html', controller: 'CrossroadsCtrl'

    }).when('/error', {
        templateUrl: 'views/crossroads.html',
        resolve: {
            loadData: app.error
        }
    }).when('/success', {
        templateUrl: 'views/rightWay.html', controller: function ($scope)
        {
            // success message
            $scope.alertMessage = 'Great job! You have reached your destination!';

        }, resolve: {
            loadData: app.success
        }
    });
});

app.directive('error', function ($rootScope)
{
    return {
        restrict: 'E', template: '<div class="text-center alert {{alertColor}}">{{alertMessage}}</div>', link: function (scope)
        {
            //complete error directive
            $rootScope.$on('$routeChangeError', function () {
                scope.alertMessage = 'Dead end! You went in the wrong direction!';
                scope.alertColor = 'alert-danger';
                scope.moved = true;
            });
        }
    };
});

var CrossroadsCtrl = app.controller('CrossroadsCtrl', function ($scope, $interval)
{
    $scope.alertMessage = 'Hello, where would you like to go?';
    $scope.alertColor = 'alert-info';

    $scope.animate = function ()
    {
        $scope.alertMessage = '';
        $interval(function ()
        {
            $scope.alertMessage += '. ';
        }, 100, 10);
    };
});


CrossroadsCtrl.error = function ($rootScope, $q, $timeout)
{
    var defer = $q.defer();
    $timeout(function () {
        defer.reject();
    }, 1000);
    return defer.promise;
};

CrossroadsCtrl.success = function ($rootScope, $q, $timeout)
{
    var defer = $q.defer();
    $timeout(function () {
        defer.resolve();
    }, 1000);
    return defer.promise;
};
