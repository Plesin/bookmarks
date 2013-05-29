'use strict';

function NotesCtrl($scope, Tags, NotesData) {
    $scope.tags = Tags;
    $scope.notes = NotesData.query();
    $scope.newNoteTags = [];
    $scope.filterTags = ['angularjs'];
    $scope.selectedTag = '';

    $scope.addNote = function() {
        var id = $scope.title.toLowerCase().replace(/\s+/g, ''),
            newNote = {time: (new Date().getTime()), title: $scope.title, content: $scope.content, tags: $scope.newNoteTags};

        NotesData.save(newNote, function() {
            $scope.notes.push(newNote);
            $scope.title = '';
            $scope.content = '';
            $scope.newNoteTags = [];
        });
    };

    $scope.deleteNote = function(note) {
        var index = $scope.notes.indexOf(note);
        NotesData.remove({id: note._id.$oid}, function() {
            $scope.notes.splice(index, 1);
        });
    };

    $scope.selectTag = function(id) {
        $scope.selectedTag = id;
    };
}
