(function(exports) {

  function NoteList() {
    this._notes = []
  }

  NoteList.prototype.all = function() {
    return this._notes
  }
  
  NoteList.prototype.create = function(string) {
    note = new Note(string)
    this._notes.push(note)
  }

  exports.NoteList = NoteList
})(this)