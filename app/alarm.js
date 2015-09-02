var app = angular.module('app', []);

//<!--add alarm directive-->
app.directive('alarm', function () {
    return {
        restrict: 'A',
        scope: {},
        controller: function ($scope) {
            this.addRed = function () {
                alert('Red alarm!');
            };
            this.addGreen = function () {
                alert('Green alarm!');
            };
            this.addYellow = function () {
                alert('Yellow alarm!');
            };
        }

    }
});
//<!--add red directive-->
app.directive('red', function () {
    return {
        require: 'alarm',
        link: function (scope, element, attrs, alarmCtrl) {
            element.bind('click', function () {
                alarmCtrl.addRed();
            });

        }
    }
});
//<!--add yellow directive-->
app.directive('yellow', function () {
    return {
        require: 'alarm',
        link: function (scope, element, attrs, alarmCtrl) {
            element.bind('dblclick', function () {
                alarmCtrl.addYellow();
            })
        }
    }
});
//<!--add green directive-->
app.directive('green', function () {
    return {
        require: 'alarm',
        link: function (scope, element, attrs, alarmCtrl) {
            element.bind('mouseenter', function () {
                alarmCtrl.addGreen();
            });

        }
    }
});