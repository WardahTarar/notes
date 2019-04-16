(function(exports){
  function returnsHTMLStringForOneNote(){
    var description = 'View returns html for one note'
    var notelist = new NoteList
    notelist.create("Hello JS")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><li><div>Hello JS</div></li></ul>", description)
  }
  returnsHTMLStringForOneNote()

  function returnsHTMLstringForThreeNotes(){
    var description = 'View returns html for three notes'
    var notelist = new NoteList
    notelist.create("Note 1")
    notelist.create("Note 2")
    notelist.create("Note 3")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><li><div>Note 1</div></li><li><div>Note 2</div></li><li><div>Note 3</div></li></ul>", description)
  }
  returnsHTMLstringForThreeNotes()

  function returnsHTMLstringForZeroNotes(){
    var description = 'View returns html for zero notes'
    notelist = new NoteList
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "", description)
  }
  returnsHTMLstringForZeroNotes()
})(this)
