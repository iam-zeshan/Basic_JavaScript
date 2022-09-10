/*
I learned:
Anything at the right side of the operator will be solved first.

For Example:
Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

Task:
Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);