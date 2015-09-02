'use strict';

var calcApp = angular.module('calcApp', []);

var calcAppElements = {};

calcAppElements.controllers = {};
calcAppElements.directives = {};

calcAppElements.controllers.SumCtrl = function ($scope)
{
    this.firstNumberSum = 5;
    this.secondNumberSum = 2;

    this.addition = function (a, b)
    {
        this.sum = a + b;
    };

    $scope.SumCtrl = this;

};

calcAppElements.controllers.SubCtrl = function ($scope)
{
    this.firstNumberSub = 12;
    this.secondNumberSub = 1;

    this.subtraction = function (a, b)
    {
        this.sub = a - b;
    };
    $scope.SubCtrl = this;

};

calcAppElements.controllers.MultiCtrl = function ($scope)
{
    $scope.firstNumberMult = 12;
    $scope.secondNumberMult = 2;

    $scope.multiplication = function (a, b)
    {
        $scope.multi = a * b;
    };
};

calcAppElements.controllers.DivideCtrl = function ($scope)
{
    $scope.firstNumberDiv = 15;
    $scope.secondNumberDiv = 5;

    $scope.divide = function (a, b)
    {
        $scope.divid = (a / b).toFixed(2);
    };
};

calcAppElements.directives.multi = function ()
{
    return {
        restrict: 'E', scope: {
            a: '@', b: '@', solve: '&'
        }, template: ' <div class="btn btn-info" ng-click="solve({a : a, b: b})">Multiple</div>'

    };
};

calcAppElements.directives.divide = function ()
{
    return {
        restrict: 'A', scope: {
            a: '@', b: '@', solve: '&'
        }, template: '<div class="btn btn-default" ng-click="solve({a : a, b: b})">Divide</div>'
    };
};

calcApp.controller(calcAppElements.controllers);
calcApp.directive(calcAppElements.directives);

