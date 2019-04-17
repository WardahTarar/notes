(function(exports){
  function singleNoteViewer(){
    var note = new Note("Hello JS!!!")
    var noteViewer = new NoteViewer(note)
    var description = "checks note's view"

    assert.isTrue(noteViewer.display() === "<div>Hello JS!!!</div>", description)
  }
  singleNoteViewer()
})(this)