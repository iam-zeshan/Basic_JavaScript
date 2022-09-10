/*
I learned:
equality operator in JavaScript. 

For Example:
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

During call the above function, if the argument that we providing was 10 then it will return 'Equal' if not then 'Not Equal'.


Task:
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
*/

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);