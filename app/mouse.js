'use strict';

var app = angular.module('app', []);

app.directive('enterC', function () {
    return function (scope, element, attrs) {
        element.bind('mouseenter', function () {
            element.addClass(attrs.enterC);
        })
    }
});

app.directive('leaveC', function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
            element.removeClass(attrs.enterC);
        })
    }
});

app.directive('enterS', function () {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            element.addClass(attrs.enterS);
        })
    }
});

app.directive('leaveS', function () {
    return function (scope, element, attrs) {
        element.bind('dblclick', function () {
            element.removeClass(attrs.enterS);
        })
    }
});