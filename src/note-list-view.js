(function(exports) {

  function NoteListView(notelist) {
    this._notelist = notelist
  }

  NoteListView.prototype.getHTML = function() {
    if (this._notelist.all().length === 0) {
      return ""
    }

    var html = ""
    this._notelist.all().forEach(function(note) {
      html += "<li><a href='#notes/"+note.id+"'>"+note.getText().substr(0,20)+ "</a></li>"
    
    })
    return "<ul>" + html + "</ul>"
  }

  
  exports.NoteListView = NoteListView
})(this)