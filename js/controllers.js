'use strict';

function NotesCtrl($scope, Tags, NotesData) {
    $scope.tags = Tags;
    $scope.notes = NotesData;

    $scope.addNote = function() {
        var id = $scope.title.toLowerCase().replace(/\s+/g, '');
        $scope.notes.push({time: (new Date().getTime()), title: $scope.title, content: $scope.content});
        $scope.title = '';
        $scope.content = '';
    };
}
