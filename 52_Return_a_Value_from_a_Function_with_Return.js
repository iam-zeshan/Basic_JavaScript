/*
I learned:
When we passed valued to the function during its calling the we can get back a value in return by using 'return' in the function.

For Example:
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.


Task:
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/

function timesFive (val) {
    return val * 5;
  }
  timesFive(5);