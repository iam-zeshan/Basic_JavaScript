/*
I learned:
'arguments', when we call the function in JavaScript then we need these arguments to input or send any value to the function during the function invoking.

For Example:
function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

Task:
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.

*/

function functionWithArgs(val1, val2) {

    console.log(val1 + val2)
  }
  functionWithArgs(1, 2);
  functionWithArgs(7, 9);
  