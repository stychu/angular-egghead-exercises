'use strict';

var app = angular.module('app', []);

app.controller('AppCtrl', ['$scope', function ($scope)
{
    $scope.description = {
        element: {
            name: 'E',
            call: 'this directive use restrict E'
        },
        attribute: {
            name: 'A',
            call: 'this directive use restrict A'
        },
        class: {
            name: 'C',
            call: 'this directive use restrict C'
        }
    };
}]);

app.directive('restrictE', function () {
    return {
        restrict: 'E',
        template: '{{description.element.name}}: {{description.element.call}}'
    }
});

app.directive('restrictA', function () {
    return {
        restrict: 'A',
        template: '{{description.attribute.name}}: {{description.attribute.call}}'
    }
});

app.directive('restrictC', function () {
    return {
        restrict: 'C',
        template: '{{description.class.name}}: {{description.class.call}}'
    }
});

app.directive('restrictM', function () {
    return {
        restrict: 'M',
        link: function () {
            alert("Restrict M: working...")
        }
    }
});
