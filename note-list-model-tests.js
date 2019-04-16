(function(exports) {
  
  function returnsAllNotes() {
    var notelist = new NoteList()
    // var note = new Note()

    if (notelist.view().length !== 1) {
      throw new Error("It doesn't have note")
    }

    if (notelist.create("First note")) {
      (notelist.view().includes("First note"))
    }
  }
  returnsAllNotes()
})(this)

