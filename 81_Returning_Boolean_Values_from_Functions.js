/*
I learned:
We can do comparison between two values by using a function, I mean, we just difine if/else statement inside of function and we can get the desired results. But there is another better way to do this work by using just the conditions in the returning line.

For Example:
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

Task:
Fix the function isLess to remove the if/else statements.
*/

function isLess(a, b) {
    // Only change code below this line
  return a < b;
    // Only change code above this line
  }
  
  isLess(10, 15);