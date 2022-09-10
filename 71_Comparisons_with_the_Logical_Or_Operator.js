/*
I learned:
Just like '&&' operator we've '||' operator that means, if one of the condition is true then the whole result would be true. 

For Example:
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

Task:
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
*/

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);