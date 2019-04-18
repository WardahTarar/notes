(function(exports) {

  function NoteListView(notelist) {
    this._notelist = notelist
  }

  NoteListView.prototype.getHTML = function() {
    if (this._notelist.all().length === 0) {
      return ""
    }

    var output = ""
    var id = 0
    this._notelist.all().forEach(function(note) {
      output = output + "<li><div>" + id + ". " + note.getText().substr(0,20)+ "</div></li>"
      id += 1
    })
    
    return "<ul>" + output + "</ul>"
  }

  
  exports.NoteListView = NoteListView
})(this)