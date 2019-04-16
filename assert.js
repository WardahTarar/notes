var assert = { 
  isTrue: function(assertionToCheck, description = "No description given") { 
    if (!assertionToCheck) { 
      throw new Error("Assertion failed; " + assertionToCheck + " is not truthy") 
    } else {
      console.log('test passed: "' + description + '"')
    }
  } 
}
