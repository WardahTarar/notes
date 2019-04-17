(function(exports){
  function NoteViewer(note) {
    this._note = note

  }

  NoteViewer.prototype.display = function() {
    x = "<div>" + this._note.getText() + "</div>"
    return x 
  }
  exports.NoteViewer = NoteViewer
})(this)