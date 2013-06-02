'use strict';

function NavCtrl($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
}

function NotesCtrl($scope, NotesData, $sanitize) {
    $scope.notes = NotesData.query();
    $scope.orderByProperty = 'time';
    $scope.listClass = 'span6';

    $scope.addNote = function() {
        var id = $scope.title.toLowerCase().replace(/\s+/g, ''),
            newNote = {time: (new Date().getTime()), title: $scope.title, content: $scope.content, tags: []};

        NotesData.save(newNote, function() {
            $scope.notes.push(newNote);
            $scope.title = '';
            $scope.content = '';
        });
    };

    $scope.deleteNote = function(note) {
        var index = $scope.notes.indexOf(note);
        NotesData.remove({id: note._id.$oid}, function() {
            $scope.notes.splice(index, 1);
        });
    };

    $scope.setListClass = function(listClass, $event) {
        $event.stopPropagation();
        $scope.listClass = listClass;
    }

}

function SettingsCtrl($scope, user, Users) {
    $scope.user = user;
    $scope.buttonsRowClass = 'invisible';

    var showButtons = function(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            $scope.buttonsRowClass = '';
        }
    };

    $scope.$watch('user', showButtons, true);

}

//http://stackoverflow.com/questions/11972026/delaying-angularjs-route-change-until-model-loaded-to-prevent-flicker/11972028#11972028
SettingsCtrl.resolve = {
  user: function(Users, LoggedInUser, $q) {
    var userId = LoggedInUser.userId;
    var deferred = $q.defer();
    Users.query({id: userId}, function(successData) {
            deferred.resolve(successData);
    }, function(errorData) {
            deferred.reject();
    });
    return deferred.promise;
  }
}
