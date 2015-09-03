'use strict';

var app = angular.module('app', []);

app.factory('Order', function ()
{
    var names = [];
    var quantities = [];
    return {
        add: function (name, quantity)
        {
            names.push(name);
            quantities.push(quantity);
        },

        getItem: function (index)
        {
            for (var i = 0; i < names.length; i++) {
                if (i == index){
                    return names[i];
                }
            }
        },

        getQuantity: function (index)
        {
            for (var i = 0; i < quantities.length; i++) {
                if (i == index){
                    index +=1;
                    return quantities[i];
                }
            }

        }
    };
});
app.controller('orderCtrl', function ($scope, $timeout, Order, $q)
{
    var index = 0;
    $scope.name = 'Pasta';
    $scope.quantity = 4;
    $scope.orders = {name: [], quantity: []};

    $scope.addOrder = function (name, quantity)
    {

        if (name !== null && name !== undefined && quantity !== null && quantity !== undefined) {
            Order.add(name, quantity);
            $scope.added = true;
            $timeout(function ()
            {
                $scope.added = false;
            }, 1000);
            $scope.name = null;
            $scope.quantity = null;
        }
    };


    $scope.success = function ()
    {
        var defer = $q.defer();

        defer.promise
            .then(function (index) {
                $scope.orders.name.push(Order.getItem(index));
                return index;
            })
            .then(function (index) {
                $scope.orders.quantity.push(Order.getQuantity(index))
            });

        defer.resolve(index);
        index += 1;

    };
});
