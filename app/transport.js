(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.service('Train', function ()
    {
        this.trainTimetable = [{
            start: 'Kraków Główny', stop: 'Wieliczka', departure: '9:10', delay: null
        }, {
            start: 'Kraków Główny', stop: 'Rzeszów Główny', departure: '12:10', delay: null
        }, {
            start: 'Kraków Główny', stop: 'Krzeszowice', departure: '12:30', delay: null
        }];

        this.delay = 2;
        this.addDelay = function (train)
        {

            train.delay = this.delay;
        };

    });

    app.service('Flight', function ($q)
    {
        this.getFlight = function ()
        {
            var d = $q.defer();
            d.resolve([{
                airline: 'Eurolot', destination: 'Amsterdam', scheduled: '10:15'
            }, {
                airline: 'Lufthansa', destination: 'Frankfurt', scheduled: '10:30'
            }, {
                airline: 'Air Berlin', destination: 'Frankfurt', scheduled: '11:30'
            }]);
            return d.promise;
        };


    });

    app.service('Bus', function ()
    {
        this.busTimetable = [{
            start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:00'
        }, {
            start: 'Tarnów', via: 'Wojnicz', stop: 'Kraków', departure: '8:10'
        }, {
            start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:15'
        }];

        this.viaStop = 'Wojnicz';
    });

    app.controller('FlightCtrl', function (Flight)
    {
        var ctrl = this;
        Flight.getFlight().then(function (result)
        {
            ctrl.flightSchedule = result;
        });

        this.isCancel = [];

        this.toggleClass = function (id)
        {
            if (this.isCancel[id] === 'danger') {
                this.isCancel[id] = '';
            } else {
                this.isCancel[id] = 'danger';
            }
        };

    });

    app.controller('BusCtrl', function (Bus) {
       this.busTimetable = Bus.busTimetable;
        this.viaStop = Bus.viaStop;
    });

    app.controller('TrainCtrl', function (Train) {
        this.trainTimetable = Train.trainTimetable;
        this.delay = Train.delay;
        this.addDelay = Train.addDelay;

    })

})();
