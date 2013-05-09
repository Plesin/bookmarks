'use strict';

// Declare app level module which depends on filters, and services
angular.module('BM', ['BM.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/:tagId', {templateUrl: 'partials/note.html', controller: 'NotesCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
