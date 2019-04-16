// (function(exports) {
  
//   function returnsAllNotes() {
//     var notelist = new NoteList()
//     // var note = new Note()

//     if (notelist.view().length !== 1) {
//       throw new Error("It doesn't have note")
//     }

//     if (notelist.create("First note")) {
//       (notelist.view().includes("First note"))
//     }
//   }
//   returnsAllNotes()
// })(this)

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

