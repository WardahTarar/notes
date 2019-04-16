(function(exports) {

  function NoteController(notelist) {
    this._notelist = notelist
    // this._notelist.create("hello JS")
    // this._notelist.create("i miss ruby")
    this._notelistView = new NoteListView(this._notelist)
  }

  NoteController.prototype.displayNotes = function(){
    var app = document.getElementById('app')
    app.innerHTML = this._notelistView.getHTML()
  }

  exports.NoteController = NoteController

})(this)