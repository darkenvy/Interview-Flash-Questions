function letterChangesFunction(code){
  console.log('letterChangesFunction hit');
  var code = code.code;
  console.log("------------");
  console.log(code);
  eval(code);
  //------------------------
  testObj = {
    total: false,
    messages: [
      {
        passed: false,
        message: ''
      },
      {
        passed: false,
        message: ''
      }
    ]
  }

  var string = "fun times!";

  function LetterChangesTest(str) { 

    // we will replace every letter in the string with the letter following it
    // by first getting the charCode number of the letter, adding 1 to it, then 
    // converting this new charCode number to a letter using the fromCharCode function
    // we also check to see if the character is z and if so we simply convert the z to an a
    var converted = str.replace(/[a-z]/gi, function(char) { 
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });

    // we have now successfully converted each letter to the letter following it
    // in the alphabet, and all we need to do now is capitalize the vowels
    var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
      return vowel.toUpperCase();
    });

    // return the final string
    return capitalized;
           
  }

  if(LetterChanges(string) === LetterChangesTest(string)){
    testObj.messages[0].passed = true;
    testObj.messages[0].message = 'found the longest word good job. Passed!';
  } else {
    testObj.messages[0].message = 'does not find the longest word. Fail!';
  }
  if(typeof LetterChanges === 'function'){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'is the proper function. Passed!';
  } else {
    testObj.messages[1].message = 'is not a function. Fail!';
  }

  if(testObj.messages[1].passed === true && testObj.messages[0].passed === true){
    testObj.total = true;
  }

  return testObj;
}

module.exports = letterChangesFunction;