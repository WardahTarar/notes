(function(exports){
  function returnsHTMLStringForOneNote(){
    var description = 'View returns html for one note'
    var notelist = new NoteList
    notelist.create("Hello JS")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><a href='#notes/8'>Hello JS</a></ul>", description)
  }
  returnsHTMLStringForOneNote()

  function returnsHTMLstringForThreeNotes(){
    var description = 'View returns html for three notes'
    var notelist = new NoteList
    notelist.create("Note 1")
    notelist.create("Note 2")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><a href='#notes/9'>Note 1</a><a href='#notes/10'>Note 2</a></ul>", description)
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
    assert.isTrue(htmlString === "<ul><a href='#notes/11'>I am loving Makers A</a></ul>", description)
  }
  returningFirst20chars()

  function linksEachNoteToURL(){
    var description = "links each note to a URL"
    var notelist = new NoteList
    notelist.create("I am loving Makers Academy")
    var notelistView = new NoteListView(notelist)

    htmlString = notelistView.getHTML()
    assert.isTrue(htmlString === "<ul><a href='#notes/12'>I am loving Makers A</a></ul>", description)
  }
  linksEachNoteToURL()

})(this)
