'use strict';

var app = angular.module('app', []);

app.controller('SnowCtrl', function ($scope)
{
    $scope.snow = [];

//    addPetal function
    $scope.addPetal = function () {
        var petal = {petal: '*'};
        $scope.snow.push(petal.petal);
        return $scope.snow;
    };
//    removePetal function
    $scope.removePetal = function () {
        $scope.snow.pop();
        return $scope.snow;
    };
});

//    add enter directive
app.directive('enter', function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            scope.$apply(attrs.enter);
        })
    }
});