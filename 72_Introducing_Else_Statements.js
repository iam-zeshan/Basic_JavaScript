/*
I learned:
'else', condition, when we the if condition does not satisfied then, the content in the else curly brases would be executed. 

For Example:
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

Task:
Combine the if statements into a single if/else statement.
*/

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
    return result;
  
    // Only change code above this line
  }
  
  testElse(4);