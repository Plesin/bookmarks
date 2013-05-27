'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('App', ['mongolab']);

App.factory('Tags', function() {
    var tags = [
        {id: 'angularjs', title: "Angular JS"},
        {id: 'grunt', title: "Grunt"},
        {id:'nodejs', title: "Node JS"}
    ];
    return tags;
});

App.directive('inputEvents', function(){
    return function(scope, element) {
        element.unbind('focus').bind('focus', function() {
            var elems = element.parent().children();
            elems.removeClass('invisible');
        });
    };
});