/*
I learned:
'>', greater than sign, we use this if want to compare two values and want which one value is greater then other one.

For Example:
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

Task:
Add the greater than operator to the indicated lines so that the return statements make sense.
*/

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);