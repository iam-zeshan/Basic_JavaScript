/*
I learned:
'>=', the greater than and the equal to operator, if the value was greater than or equal to that we are doing with comparison, then the condition would be true and if not then the condition would be false. 

For Example:
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

For Example:
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
*/

function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);