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
        var newNote = {time: (new Date().getTime()), content: $scope.content};

        NotesData.save(newNote, function() {
            $scope.notes.push(newNote);
            $scope.content = '';
        });
    };

    $scope.deleteNote = function(note) {
        var index = $scope.notes.indexOf(note);
        note.destroy(function() {
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
    $scope.infoBox = {
        classes: 'invisible',
        text: '',
    };

    var showButtons = function(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            $scope.buttonsRowClass = '';
        }
    };

    $scope.$watch('user', showButtons, true);

    $scope.saveUser = function($event) {
        $scope.user.update(
            function() {
                $scope.infoBox.classes = "alert alert-success";
                $scope.infoBox.text = "Your changes have been saved.";
                $scope.buttonsRowClass = 'invisible';
            },
            function() {
                $scope.infoBox.classes = "alert alert-error";
                $scope.infoBox.text = "There has been an error. Please try again."
            }
        );
    };

    $scope.hideInfoBox = function() {
        $scope.infoBox.classes = 'invisible';
        $scope.infoBox.text = '';
    };

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
