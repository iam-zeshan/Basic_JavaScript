/*
I learned:
'!==', again just like we were using a strict equality operator, here is now the strict unequality operator. 

For Example:
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

Task:
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
*/

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);