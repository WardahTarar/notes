(function(exports) {

  function NoteList() {
    this.array = []

    NoteList.prototype.view = function() {
      this.note = new Note()
      this.array.push(this.note)
      return this.array
    }
  }
  
  exports.NoteList = NoteList
})(this)