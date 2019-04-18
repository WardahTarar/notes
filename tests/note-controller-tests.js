(function(exports) {
  // function checksController(){
  //   var description = "checks controller test"
  //   var notelist = new Notelist
  //   notelist.create('just testing the controller note')
  //   // var notelistView = new NoteListView(notelist)
  //   // assert.isTrue(notelistView.getHTML() === "<ul><li><div>just testing the controller note</div></li></ul>", description)
  //   var controller = new NoteController(notelist)
  //   assert.isTrue(controller.displayNotes() === "just testing the controller note", description)

  // }
  // checksController()

  function checksControllerwithDoubles(){
    var description = "checks controller test with doubles"

    function NoteDouble(text) {
      this.text = text
    }

    NoteDouble.prototype.getText = function(){
      return this.text
    }

    var note = new NoteDouble("please work!!")

    function NoteListDouble() {}
    NoteListDouble.prototype.all = function() {
      return [note]
    }

    function element() {
      this.innerHtml = ""
    }

    var notelist = new NoteListDouble()
    var controller = new NoteController(notelist)
    
    var newHTML = controller.displayNotes(element)
    assert.isTrue(newHTML === "<ul><li><div>0. please work!!</div></li></ul>", description)
  }

  checksControllerwithDoubles()
})(this)