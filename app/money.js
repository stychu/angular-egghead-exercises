(function ()
{
    'use strict';
    var moneyApp = angular.module('moneyApp', []);

    moneyApp.directive('money', function ()
    {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                forWhat: '@', howMany: '='
            }, templateUrl: 'moneyTemplate.html', link: function (scope)
            {
                scope.proposals = [10, 20, 30, 40, 50, 60];
                scope.howMany = scope.proposals[0];
                scope.takeMyMoney = 'Shut up and take my money!';
                scope.isContentVisible = false;
                scope.toggleContent = function () {
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        };
    });
})();
