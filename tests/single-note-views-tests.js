(function(exports){
  function singleNoteViewer(){
    var note = new Note("Hello JS!!!")
    console.log(note.getText())
    var noteViewer = new NoteViewer(note)
    console.log(noteViewer)
    var description = "checks note's view"

    assert.isTrue(noteViewer.display() === "<div>Hello JS!!!</div>", description)
  }
  singleNoteViewer()
})(this)