/*
We can also use 'base' argument with the parseInt function while we converted the string into an integer. and the second argument would define the 'base', I mean it will define at which base the string should be converted

Task:
Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
*/

function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");