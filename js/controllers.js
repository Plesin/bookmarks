'use strict';

angular.module('BM.controllers', [])
  .controller('CategoryCtrl', ['$scope', function($scope) {
  	$scope.categories = [
		{id: 'angular', title: "Angular JS"},
		{id: 'grunt', title: "Grunt"},
		{id:'nodejs', title: "Node JS"}
	];

	$scope.addCategory = function() {
		var id = $scope.newCategory.toLowerCase().replace(/\s+/g, '');
		$scope.categories.push({id: id, title:$scope.newCategory});
		$scope.newCategory = '';
	};
  }])
  .controller('ListCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  	var categoryId = $routeParams.categoryId;
  	var items = {
  		"angular": [
  			{id:'b_1', link: 'http://angularjs.org/', title: "Angular JS project page", desc: 'the framework home page'},
  			{id:'b_2', link: 'https://www.youtube.com/watch?v=M-MuOU3My-Y', title: "Vojta Jína přednáška", desc: 'GDG Spaghetti Code Liberec - Vojta Jína - AngularJS'},
  			{id:'b_3', link: 'http://www.alexrothenberg.com/2013/02/11/the-magic-behind-angularjs-dependency-injection.html', title: "Dependency injection article" , desc: 'The "Magic" behind AngularJS Dependency Injection'}
  		],
  		"grunt": [
  			{id:'b_4', link: 'http://gruntjs.com/', title: "Grunt home page", desc: 'Grunt home page'},
  			{id:'b_5', link: 'http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt', title: "getting started with grunt", desc: 'quick and easy starting with grutn tutorial'}
  		],
  		"nodejs": [
  			{id:'b_6', link: 'http://nodejs.org/', title: "Nodejs home page", desc: 'some desc'},
  			{id:'b_7', link: 'http://nodejs.org/', title: "Nodejs home page", desc: 'other desc'},
  			{id:'b_8', link: 'http://nodejs.org/', title: "Nodejs home page", desc: 'yet another desc'}
  		]
  	}
  	$scope.title = categoryId;
  	$scope.items = items[categoryId];

    $scope.deleteBookmark = function(index) {
  		$scope.items.splice(index, 1);
  	};

    $scope.addBookmark = function() {
      $scope.items.push({ id:'', link: $scope.link, title: $scope.link, desc: $scope.desc });
      $scope.link = $scope.desc = '';
    };

  }]);
