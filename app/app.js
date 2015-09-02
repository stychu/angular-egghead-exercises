(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    //add routing
    app.config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'home.html',
                controller: 'RouteCtrl'
            })
    });

    app.controller('RouteCtrl', function ($scope)
    {
        $scope.$root.condition = true;
        this.buttonName = 'Click to show!';

        this.display = function ()
        {
            this.message = this.message ? '' : 'I came from a controller';
            this.buttonName = this.message === '' ? 'Click to show!' : 'Click to hide!';

        };
        $scope.routing = this;
    });

})();
