(function(exports){
  function storesNoteInList(){
    var notelist = new NoteList
    notelist.create("This is my note")
    notes = notelist.all()
    assert.isTrue(notes.length === 1, 'notes.length should be 1')
    assert.isTrue(notes[0].getText() === "This is my note", 'first note should have specified text')
  }
  storesNoteInList()

  function storesMultipleNotesInList(){
    var notelist = new NoteList
    notelist.create("First note")
    notelist.create("Second note")
    notelist.create("Third note")
    notes = notelist.all()
    assert.isTrue(notes.length === 3, 'notes.length should be 3')
    assert.isTrue(notes[2].getText() === "Third note", 'last note should have specified text')
  }
  storesMultipleNotesInList()

})(this)

