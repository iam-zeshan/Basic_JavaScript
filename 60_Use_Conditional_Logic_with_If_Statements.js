/*
I learned:
'If' condition, when the certain condition is true then the code in the curly braces will be executed, it works like true and false, I mean if the condition was true the code will be executed and if the condition proved false then the code will not be...


Example Pseudocode:
Pseudocode

if (condition is true) {
  statement is executed
}

For Example:
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
test(false);

Task:
Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue)
    {
      return "Yes, that was true";
    }
    return "No, that was false";
  
    // Only change code above this line
  
  }