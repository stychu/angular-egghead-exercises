'use strict';

var app = angular.module('simpleExercise', ['ngRoute']);

app.config(function ($routeProvider, $provide)
{
    $routeProvider.when('/', {
        templateUrl: 'views/home.html', controller: 'SetCtrl as setCtrl'
    });
    $routeProvider.when('/display', {
        templateUrl: 'views/resolveOrReject.html', controller: 'AppCtrl as appCtrl'
    });
    $routeProvider.otherwise('/');

    $provide.service('promises', function ($q)
    {
        var success, unSuccess;
        return {
            set: function (successValue, unSuccessValue)
            {
                success = successValue;
                unSuccess = unSuccessValue;
            }, getSuccess: function ()
            {
                var tmp = $q.defer();
                tmp.resolve(success);
                return tmp.promise;
            }, getUnSuccess: function ()
            {
                var tmp = $q.defer();
                tmp.reject(unSuccess);
                return tmp.promise;
            }
        };
    });
});

app.controller('SetCtrl', function (promises, $location)
{
    var ctrl = this;
    ctrl.set = function (value)
    {
        if (value && value.success && value.unSuccess) {
            promises.set(value.success, value.unSuccess);
            $location.path('/display');
        }
    };
});


app.controller('AppCtrl', function (promises)
{
    var ctrl = this;
    ctrl.get = function ()
    {
        promises.getSuccess().then(function (result)
        {
            ctrl.success = result;
        });
    };
});

app.controller('UnSuccessCtrl', function (promises)
{
    var ctrl = this;
    ctrl.getUnSuccess = function ()
    {
        promises.getUnSuccess().catch(function (result)
        {
            ctrl.unSuccess = result;
        });
    };
});

app.directive('resolveSuccessPromise', function ()
{
    return {
        scope: {},
        restrict: 'E',
        controller: 'UnSuccessCtrl as unSuccessCtrl',
        template: '<div class="form-group">\n    <button id="unSuccessButton" class="btn btn-danger" ng-click="unSuccessCtrl.getUnSuccess()"> Get un success value from directive</button>\n    <span ng-if="unSuccessCtrl.unSuccess">\n        <p class="form-group">\n            Your un success value is: <span class="text-danger">{{unSuccessCtrl.unSuccess}}</span>\n        </p>\n    </span>\n</div>'
    };
});
