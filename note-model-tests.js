(function(exports) {
  function testingJStext() {
    var notemodel = new NoteModel();
    assert.isTrue(notemodel.text === "My favourite language is JavaScript")
  }
  testingJStext()
})(this)
