(function(exports) {
  function testingJStext() {
    var note = new Note('My favourite language is JavaScript')
    var description = "Note text is 'my fave language is javascript'"
    assert.isTrue(note.getText() === "My favourite language is JavaScript", description)
  }
  testingJStext()

  function testingNoteContent() {
    var note = new Note('My first note')
    var description = "Note text is 'my first note'"
    assert.isTrue(note.getText() === "My first note", description)
  }
  testingNoteContent()

  function returnsUniqueIDwithNotes(){
    var description = "returns unique ID with each note"
    var note1 = new Note("I am loving Makers Academy")
    var note2 = new Note("I am learning JavaScipt")

    assert.isTrue(note1.id) === 0
    assert.isTrue(note1.id) === 1
  }
  returnsUniqueIDwithNotes()

})(this)

