(function(exports) {
  function testingJStext() {
    var note = new Note('My favourite language is JavaScript')
    var description = "Note text is 'my fave language is javascript'"
    assert.isTrue(note.text === "My favourite language is JavaScript", description)
  }
  testingJStext()

  function testingNoteContent() {
    var note = new Note('My first note')
    var description = "Note text is 'my first note'"
    assert.isTrue(note.text === "My first note", description)
  }
  testingNoteContent()

})(this)

