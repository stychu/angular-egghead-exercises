(function () {
    'use strict';
    angular.module('countryStateCity').directive('state', function () {
        return {
            //complete state directive
            restrict: 'E',
            transclude: true,
            scope: {},
            require: '^country',
            replace: true,
            controller: 'stateCtrl as stateCtrl',
            templateUrl: 'templates/state.tpl.html',
            link: function (scope, element, attrs, countryCtrl) {
                scope.$watch(function () {
                    return countryCtrl.chooseCountry;
                }, function (newValue) {
                    if (newValue) {
                        scope.country = newValue;
                    }
                });
            }
        };
    });
})();
