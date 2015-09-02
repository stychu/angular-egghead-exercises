(function ()
{
    'use strict';

    var appScope = angular.module('appScope', []);

    appScope.controller('scopeCtrl', function ($scope, simpleFactory)
    {
        this.unitScope = function ()
        {
            this.unitScopeValue = $scope.input;
        };
        this.separateScope = function ()
        {
            this.otherScopeValue = simpleFactory.get();
        };
        $scope.ctrl = this;
    });

    appScope.factory('simpleFactory', function ()
    {
        var valueFromScope;
        return {
            set: function (value)
            {
                valueFromScope = value;
            }, get: function ()
            {
                return valueFromScope;
            }
        };
    });

    appScope.directive('unit', function ()
    {
        return {
            restrict: 'E', replace: true, template: '<div> <input id="unit" class="form-control" type="text" ng-model="input"></div>'
        };
    });

    appScope.directive('separate', function (simpleFactory)
    {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            template: '<div> <input id="separate" class="form-control" type="text" ng-model="input"></div>',
            link: function (scope)
            {
                scope.$watch('input', function (newValue)
                {
                    simpleFactory.set(newValue);
                });
            }
        };
    });
})();
