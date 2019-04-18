(function(exports){
  function returnsHTMLStringForOneNote(){
    var description = 'View returns html for one note'
    var notelist = new NoteList
    notelist.create("Hello JS")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><li><div>0. Hello JS</div></li></ul>", description)
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
    assert.isTrue(htmlString === "<ul><li><div>0. Note 1</div></li><li><div>1. Note 2</div></li><li><div>2. Note 3</div></li></ul>", description)
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

  function returningFirst20chars(){
    var description = "returns first 20 characters of each note"
    var notelist = new NoteList
    notelist.create("I am loving Makers Academy")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()

    assert.isTrue(htmlString === "<ul><li><div>0. I am loving Makers A</div></li></ul>", description)
  }
  returningFirst20chars()

  function returnsUniqueIDwithNotes(){
    var description = "returns unique ID with each note"
    var notelist = new NoteList
    notelist.create("I am loving Makers Academy")
    notelist.create("I am learning JavaScipt")
    notelist.create("I miss Ruby")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()

    assert.isTrue(htmlString === "<ul><li><div>0. I am loving Makers A</div></li><li><div>1. I am learning JavaSc</div></li><li><div>2. I miss Ruby</div></li></ul>", description)
  }
  returnsUniqueIDwithNotes()

})(this)
