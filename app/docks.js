(function ()
{
    'use strict';
    var app = angular.module('weatherApp', []);

    app.factory('WeatherConditions', function ()
    {
        var currentConditions = '', availableConditions = ['stormy', 'cloudy', 'clear', 'heavy rain', 'sunny', 'windy'];

        return {
            clear: function ()
            {
                currentConditions = '';
            },
            addCondition: function (condition)
            {
                availableConditions.push(condition);
            },
            getAvailableConditions: function ()
            {
                return availableConditions;
            },
            setCondition: function (condition)
            {
                if (currentConditions !== '') {
                    currentConditions += ' ' + condition;
                } else {
                    currentConditions = condition;
                }
            },
            isCurrently: function (condition)
            {
                return (currentConditions.search(condition) > -1);
            },
            getCurrentConditions: function ()
            {

                return currentConditions;
            }
        };
    });

    app.controller('portCtrl', ['$scope', 'WeatherConditions', function ($scope, WeatherConditions)
    {
        $scope.availableConditions = WeatherConditions.getAvailableConditions();
        $scope.currentCondition = $scope.availableConditions[0];

        $scope.isCurrently = function (condition)
        {
            return WeatherConditions.isCurrently(condition);
        };
        $scope.addCondition = function (condition)
        {
            WeatherConditions.setCondition(condition);
        };
        $scope.clearConditions = function ()
        {
            WeatherConditions.clear();
        };
    }]);
})();
