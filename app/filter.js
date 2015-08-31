'use strict';
var app = angular.module('app', []);

//add quote filter
app.filter('quote', function (){
    return function (text) {
        return "\"" + text + "\"";
    }
});
//add withoutH filter
app.filter('withoutH', function() {
    return function (text) {
        return text.replace(/h/gi, "");
    }
});
//add firsLetterUp filter
app.filter('firstLetterUp', function () {
    return function (text) {
        return text.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});

app.controller('FilterCtrl', function ($scope)
{
    $scope.data = {
        citation: 'To be, or not to be...',
        title: 'The Hobbit: The Battle of the Five Armies',
        someText: 'Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories.'
    };
});
