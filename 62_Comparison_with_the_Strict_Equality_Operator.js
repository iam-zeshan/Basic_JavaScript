/*
I learned:
'===', if we use triple equality operator then, it is called strict mode of comparison. The comparison between two value's data type must be same if we use this triple operator. 

Task:
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);