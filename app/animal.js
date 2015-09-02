'use strict';

var animalApp = angular.module('animalApp', []);

animalApp.directive('animal', function ()
{
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        transclude: true,
        template: '<div class="col-md-4">' +
                '<h3>{{name}}</h3>' +
                '<div>' +
                '<div ng-switch on="name">' +
                '<div ng-switch-when="dog" ng-transclude><div class="btn btn-default"><img src="assets/dog.png"></div></div>' +
                '<div ng-switch-when="cat" ng-transclude><div class="btn btn-default"><img src="assets/cat.png"></div></div>' +
                '<div ng-switch-when="pig" ng-transclude><div class="btn btn-default"><img src="assets/pig.jpg"></div></div>' +
                '</div></div>'
    };
});
