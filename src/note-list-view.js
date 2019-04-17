(function(exports) {

  function NoteListView(notelist) {
    this._notelist = notelist
  }

  NoteListView.prototype.getHTML = function() {
    if (this._notelist.all().length === 0) {
      return ""
    }

    var output = ""
    this._notelist.all().forEach(function(note) {
      output = output + "<li><div>" + note.getText().substr(0,20)+ "</div></li>"
    })
    // console.log("<ul>" + output + "</ul>")

    return "<ul>" + output + "</ul>"
  }

  
  exports.NoteListView = NoteListView
})(this)