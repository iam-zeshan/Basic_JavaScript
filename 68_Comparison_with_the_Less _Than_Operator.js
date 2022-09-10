/*
I learned:
'<' operator, it works same as the previous one but it is the opposite. 

For Example:
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

Task:
Add the less than operator to the indicated lines so that the return statements make sense.
*/

function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);