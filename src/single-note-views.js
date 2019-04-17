(function(exports){
  function NoteViewer(note) {
    this._note = note

  }

  NoteViewer.prototype.display = function() {
    x = "<div>" + this._note.getText() + "</div>"
    console.log(x)
    return x 
  }
  exports.NoteViewer = NoteViewer
})(this)