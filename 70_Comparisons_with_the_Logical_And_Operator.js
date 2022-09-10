/*
I learned:
While working on projects sometimes we've got a scenerio when we want to test more than thing at a time, we divide two conditions with the '&&' operator, and if the both conditions were true then the whole result would be true.

For Example:
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

Task:
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
*/

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
  