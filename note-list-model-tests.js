(function(exports) {
  function returnsAllNotes() {
    var notelist = new NoteList()
    // var note = new Note()

    if (notelist.view().length !== 1) {
      console.log(view())
      throw new Error("It doesn't have note")
    }
  }
  returnsAllNotes()
})(this)