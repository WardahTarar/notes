(function(exports) {

  var counter = 0
  function Note(string) {
    this._text = string
    this.id = counter
    counter += 1
  }

  Note.prototype.getText = function() {
    return this._text
  }
  
  exports.Note = Note
})(this)

