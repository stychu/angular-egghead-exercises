'use strict';

var calcApp = angular.module('calcApp', []);

//SumCtrl
calcApp.controller('SumCtrl', function ($scope) {
    this.firstNumber = 12;
    this.secondNumber = 1;
    this.addition = function (firstNumber, secondNumber) {
        this.sum = firstNumber + secondNumber;
        return this.sum;
    };
    return $scope.sumCtrl = this;
});
//SubCtrl
calcApp.controller('SubCtrl', function ($scope) {
    this.firstNumber = 12;
    this.secondNumber = 1;
    this.subtraction = function (firstNumber, secondNumber) {
        this.sub = firstNumber - secondNumber;
        return this.sub;
    };
    return $scope.subCtrl = this;
});