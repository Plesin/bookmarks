'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('App', ['mongolab', 'ngSanitize']);

App.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/list.html',
    controller: 'NotesCtrl'
  });

  $routeProvider.when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsCtrl',
    resolve: SettingsCtrl.resolve
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});

App.factory('LoggedInUser', function() {
    return {
        userId: "51ab910ee4b0fe3ebf54fe0b"
    }
});

App.factory('Tags', function() {
    var tags = [
        {id: 'angularjs', title: "Angular JS"},
        {id: 'grunt', title: "Grunt"},
        {id:'nodejs', title: "Node JS"}
    ];
    return tags;
});

App.directive('editTitle', function(NotesData){
    return function(scope, element) {
        var input = element.next(), originalText;

        element.unbind('click').bind('click', function() {
            element.addClass('invisible');
            input.removeClass('invisible');
            input[0].focus();
            originalText = input[0].value;
        });

        input.unbind('blur').bind('blur', function() {
            var note = scope.note, hideInput;

            hideInput = function() {
                input.addClass('invisible');
                element.removeClass('invisible');
            };

            if (originalText.trim() !== note.title.trim()) {
                NotesData.update({ id: note._id.$oid}, angular.extend({}, note, {_id:undefined}), hideInput);
            } else {
                hideInput();
            }
        });
    };
});

App.filter('htmlContent', function() {
    return function(text) {
      return linkify(text.replace(/\n/g, '<br/>'));
    }
  });