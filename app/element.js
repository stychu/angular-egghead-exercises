'use strict';

var element = angular.module('elementApp', []);

element.directive('findElement', function ()
{
    var msg = angular.element('<h4></h4>');

    //complete link function
    var link = function (scope)
    {
        //watch changes on input

        scope.$watch('input', function (value,ele) {

            if (value === "circle") {
                msg.removeClass("text-danger");
                msg.empty();
                msg.addClass('circle');
            }
            else if (value === "square") {
                msg.removeClass("text-danger");
                msg.empty();
                msg.addClass('square');
            }
            else {
                msg.removeClass("square");
                msg.removeClass("circle");
                msg.text('You did not enter *circle* or *square*').addClass("text-danger");
            }
        })
    };

    return {
        restrict: 'E',
        replace: true,
        template: '<div> <input class="form-control" type="text" ng-model="input" placeholder="Write circle or square"></div>',
        compile: function (templateElement)
        {
            //return link function
            templateElement.append(msg);

            return link;
        }
    };
});

