/*
I learned:
If the function that hasn't any return value then, during calling it will return as an 'undefined'. 

For Example:
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Task:
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive (val) {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();