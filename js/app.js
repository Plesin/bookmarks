'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('App', []);

App.factory('Tags', function() {
    var tags = [
        {id: 'angularjs', title: "Angular JS"},
        {id: 'grunt', title: "Grunt"},
        {id:'nodejs', title: "Node JS"}
    ];
    return tags;
});

App.factory('NotesData', function() {
    var Notes =
    [
        {"time": "1362694426773", "title": "Angular JS project page", "content": "http://angularjs.org/", "tags": ["angularjs"]},
        {"time": "1362693145553", "title": "Vojta Jína přednáška", "content": "https://www.youtube.com/watch?v=M-MuOU3My-Y" ,"tags": ["angularjs"]},
        {"time": "1360620005000", "title": "Dependency injection article" , "content": "http://www.alexrothenberg.com/2013/02/11/the-magic-behind-angularjs-dependency-injection.html", "tags": ["angularjs"]},
        {"time": "1360676013000", "title": "Grunt home page", "content": "http://gruntjs.com/", "tags": ["grunt"]},
        {"time": "1360785600000", "title": "getting started with grunt", "content": "http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt", "tags": ["grunt"]},
        {"time": "1360736155000", "title": "Nodejs home page", "content": "http://nodejs.org/", "tags": ["nodejs"]},
        {"time": "1360832121000", "title": "Nodejs home page", "content": "http://nodejs.org/", "tags": ["nodejs"]},
        {"time": "1360944318917", "title": "Nodejs home page", "content": "http://nodejs.org/", "tags": ["nodejs"]}

    ];
    return Notes;
});

App.directive('inputEvents', function(){
    return function(scope, element) {
        element.unbind('focus').bind('focus', function() {
            var elems = element.parent().children();
            elems.removeClass('invisible');
        });
    };
});