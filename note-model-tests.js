(function(exports) {
  function testingJStext() {
    var note = new Note()
    assert.isTrue(note.text === "My favourite language is JavaScript")
  }
  testingJStext()
})(this)
