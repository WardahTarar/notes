(function(exports) {

  function NoteController(notelist) {
    this._notelist = notelist
    this._notelistView = new NoteListView(this._notelist)
  }

  NoteController.prototype.displayNotes = function(element = document.getElementById("app") ){
    return element.innerHTML = this._notelistView.getHTML()
  }

  exports.NoteController = NoteController
})(this)