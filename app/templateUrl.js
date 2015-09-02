'use strict';
var app = angular.module('app', []);

app.directive('url', function ()
{
    return {
        restrict: 'E',
        scope: {
            title: '@', data: '@'
        },
        templateUrl: 'urlTemplate.html',
        link: function (scope)
        {
            scope.isTitleVisible = function (value)
            {
                return !(!value || 0 === value.length);
            };
            scope.content = function ()
            {
                scope.isContentVisible = !scope.isContentVisible;
            };
        }
    };
});
