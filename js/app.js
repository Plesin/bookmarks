'use strict';

// Declare app level module which depends on filters, and services
angular.module('BM', ['BM.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list/:categoryId', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
