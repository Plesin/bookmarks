'use strict';

function NotesCtrl($scope, Tags, NotesData) {
    $scope.tags = Tags;
    $scope.notes = NotesData.query();
    $scope.newNoteTags = [];
    $scope.filterTags = ['angularjs'];
    $scope.selectedTag = '';

    $scope.addNote = function() {
        var id = $scope.title.toLowerCase().replace(/\s+/g, '');
        $scope.notes.push({time: (new Date().getTime()), title: $scope.title, content: $scope.content, tags: $scope.newNoteTags});
        $scope.title = '';
        $scope.content = '';
        $scope.newNoteTags = [];
    };

    $scope.deleteNote = function(index) {
        var note = $scope.notes[index];
        NotesData.remove({id: note._id.$oid}, function() {
            $scope.notes.splice(index, 1);
        });
    };

    $scope.selectTag = function(id) {
        $scope.selectedTag = id;
    };
}
