'use strict';

angular.module('BM.controllers', [])
    .controller('NotesCtrl', ['$scope', function($scope) {
      	$scope.tags = [
        	{id: 'angularjs', title: "Angular JS"},
        	{id: 'grunt', title: "Grunt"},
        	{id:'nodejs', title: "Node JS"}
    	];

        $scope.notes =
        [
            {id:'n_1', title: "Angular JS project page", content: 'http://angularjs.org/', tags: ['angular']},
            {id:'n_2', title: "Vojta Jína přednáška", content: 'https://www.youtube.com/watch?v=M-MuOU3My-Y' ,tags: ['angular']},
            {id:'n_3', title: "Dependency injection article" , content: 'http://www.alexrothenberg.com/2013/02/11/the-magic-behind-angularjs-dependency-injection.html', tags: ['angular']},
            {id:'n_4', title: "Grunt home page", content: 'http://gruntjs.com/', tags: ['grunt']},
            {id:'n_5', title: "getting started with grunt", content: 'http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt', tags: ['grunt']},
            {id:'n_6', title: "Nodejs home page", content: 'http://nodejs.org/', tags: ['grunt']},
            {id:'n_7', title: "Nodejs home page", content: 'http://nodejs.org/', tags: ['grunt']},
            {id:'n_8', title: "Nodejs home page", content: 'http://nodejs.org/', tags: ['grunt']}
        ];

    	$scope.addNote = function() {
    		var id = $scope.title.toLowerCase().replace(/\s+/g, '');
    		$scope.notes.push({id: id, title: $scope.title, content: $scope.content});
    		$scope.title = '';
            $scope.content = '';
    	};
    }]);
