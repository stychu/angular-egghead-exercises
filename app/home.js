'use strict';
var homeApp = angular.module('homeApp', []);

// add homeApp.provider
homeApp.provider('Home', function () {
    var type,type2;
    return {
        setColor: function (color) {
            if (!color) {

                return type = 'red';
            }
            type = color;
        },
        setNumber: function (number) {
            type2 = number % 2 == 0 ? 99 : 100;
        },
        $get: function () {
            return {
                color: type,
                number: type2
            }
        }
    }
});

// add homeApp.config
homeApp.config(function (HomeProvider) {
    HomeProvider.setColor();
    //HomeProvider.setColor('yellow');
    //HomeProvider.setColor('green');
    HomeProvider.setNumber(1);
    //HomeProvider.setNumber(2);

});

homeApp.controller('HomeCtrl', function (Home)
{
    var ctrl = this;
    ctrl.color = Home.color;
    ctrl.number = Home.number;
});
