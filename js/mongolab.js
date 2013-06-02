'use strict';
// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('mongolab', ['ngResource']).
    factory('NotesData', function($resource) {
      var NotesData = $resource('https://api.mongolab.com/api/1/databases/bm/collections/notes/:id',
          { apiKey: 'WOqyxlY6NZQQUKrXwuWDm5juCm5Sognv' }, {
            update: { method: 'PUT' }
          }
      );

      NotesData.prototype.update = function(cb) {
        return NotesData.update({id: this._id.$oid}, angular.extend({}, this, {_id:undefined}), cb);
      };

      NotesData.prototype.destroy = function(cb) {
        return NotesData.remove({id: this._id.$oid}, cb);
      };

      return NotesData;
    }).
    factory('Users', function($resource) {
      var Users = $resource('https://api.mongolab.com/api/1/databases/bm/collections/users/:id',
          { apiKey: 'WOqyxlY6NZQQUKrXwuWDm5juCm5Sognv' }, {
            query:  {method:'GET', isArray:false },
          }
      );

      return Users;
    });

