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
      html += "<a href='#notes/"+note.id+"'>"+note.getText().substr(0,20)+ "</a>"
    
    })
    return "<ul>" + html + "</ul>"
  }

  
  exports.NoteListView = NoteListView
})(this)