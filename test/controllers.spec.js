describe('BM controllers', function() {

  describe('NotesCtrl', function() {
    var scope, tags, notesData, ctrl;

    beforeEach(function() {
        scope = {};
        tags = {};
        notesData = {
            query: function() {}
        };
        ctrl = new NotesCtrl(scope, tags, notesData);
    });

    it('should set the default value of orderByProperty', function() {
        expect(scope.orderByProperty).toBe('time');
    });

    it('should set the default value of selectedTag', function() {
        expect(scope.selectedTag).toBe('');
    });

  });
});