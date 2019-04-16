(function(exports) {
  
  var appContainer = document.getElementById('app')

  var htmlString = appContainer.innerHTML
  appContainer.innerHTML = "howdy"
  console.log(appContainer.innerHTML)


})(this)