// (function(exports) {

//   function NoteList() {
//     this.array = []

//     NoteList.prototype.view = function() {
//       note = new Note()
//       this.array.push(note)
//       return this.array
//     }

//     NoteList.prototype.create = function(string) {
//       note = new Note()
//       note.text = string
//       this.array.push(note)
//       return note
//     }
//   }
  
//   exports.NoteList = NoteList
// })(this)


(function(exports) {

  function NoteList() {
    this._array = []

   NoteList.prototype.all = function() {
      return this._array
   }
   NoteList.prototype.create = function(string) {
     note = new Note(string)
     this._array.push(note)
   }
  }
  exports.NoteList = NoteList
})(this)