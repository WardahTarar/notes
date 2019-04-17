(function(exports){
  function NoteViewer(note) {
    this._note = note

  }

  NoteViewer.prototype.display = function() {
    return "<div>" + this._note.getText() + "</div>"
  }
  exports.NoteViewer = NoteViewer
})(this)