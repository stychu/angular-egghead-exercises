(function () {
    'use strict';
    angular.module('countryStateCity').directive('detail', function () {
        return {
            //complete detail directive
            restrict: 'E',
            scope: {},
            require: ['^country', '^state'],
            replace: true,
            controller: 'detailsCtrl as detailsCtrl',
            templateUrl: 'templates/detail.tpl.html',
            link: function (scope, element, attrs, contrls) {
                scope.$watch(function () {
                    return [contrls[0].chooseCountry, contrls[1].chooseState];
                }, function (newValue) {
                    if (newValue && newValue[0] && newValue[1]) {
                        scope.country = newValue[0];
                        scope.state = newValue[1];
                        scope.choose = scope.chooseCity(newValue[0], newValue[1]);
                        scope.flag = scope.chooseCity(newValue[0], 'flag');
                    } else {
                        scope.choose = null;
                    }
                }, true);
            }
        };
    });
})();
