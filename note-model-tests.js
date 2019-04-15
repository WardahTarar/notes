(function(exports) {
  function testingJStext() {
    var notemodel = new NoteModel();

    if (notemodel.text !== "My favourite language is JavaScript") {
      throw new Error("Error")
    }
  }
  testingJStext()
})(this)
