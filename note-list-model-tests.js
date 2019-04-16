(function(exports){
  function storesNotesinList(){
    var notelist = new NoteList
    notelist.create("This is my note")
    notes = notelist.all()
    assert.isTrue(notes.length === 1)
    assert.isTrue(notes[0].getText() === "This is my note")
  }
  storesNotesinList()
})(this)

