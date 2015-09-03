'use strict';
var bookApp = angular.module('bookApp', []);

bookApp.controller('BookCtrl', function ($scope)
{
    $scope.description = 'While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call' +
            ' in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum,' +
            ' his body covered in baffling symbols. As Langdon and gifted French...';

});

bookApp.directive('bookTitle', function ()
{
    return {
        restrict: 'E', scope: {
            title: '@'
        }, template: '<h4 class="text-center"><strong>{{title}}</strong></h4>'
    };
});

bookApp.directive('bookDescription', function ()
{
    return {
        restrict: 'E', scope: {
            text: '='
        }, template: '<div class="jumbotron text-left">{{text}}</div>'
    };
});

bookApp.directive('bookPages', function ()
{
    return {
        restrict: 'E', scope: {
            number: '@'
        }, template: '<span class="badge">{{number}} pages</span>'
    };
});

bookApp.directive('book', function ()
{
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            publisher: '@'
        },
        template: ' <div class="col-md-4 text-right">' +
        '<div class="panel panel-default" > ' +
        '<div class="panel-body">' +
        '<div>' +
        '<div ng-transclude></div>' +
        '</div>' +
        '</div>' +
        '<div class="panel-footer text-left"><strong>Publisher: {{publisher}}</strong></div></div></div>'
    };
});
