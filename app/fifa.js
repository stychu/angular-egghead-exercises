'use strict';

var fifaApp = angular.module('fifaApp', []);

//log
fifaApp.run(function ($rootScope, $log) {
    $rootScope.$log = $log;
});

fifaApp.controller('FifaCtrl', function ()
{
    var ctrl = this;
    ctrl.ranking = [{
        team: 'Germany', points: 1725
    }, {
        team: 'Argentina', points: 1583
    }, {
        team: 'Colombia', points: 1450
    }, {
        team: 'Belgium', points: 1417
    }, {
        team: 'Netherlands', points: 1374
    }];

    ctrl.PolandRank = false;

    ctrl.showPolandRank = function ()
    {
        ctrl.PolandRank = !ctrl.PolandRank;
    };

});
