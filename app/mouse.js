'use strict';

var app = angular.module('app', []);

app.directive('enter', function () {
    return function (scope, element, attrs) {
        element.bind('mouseenter', function () {
            element.addClass(attrs.enter);
        })
    }
});

app.directive('leave', function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
            element.removeClass(attrs.enter);
        })
    }
});

app.directive('clickOn', function () {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            element.addClass(attrs.clickOn);
        })
    }
});

app.directive('dbClickOn', function () {
    return function (scope, element, attrs) {
        element.bind('dblclick', function () {
            element.removeClass(attrs.clickOn);
        })
    }
});