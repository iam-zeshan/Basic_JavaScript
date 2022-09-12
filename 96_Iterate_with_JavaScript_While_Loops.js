/*
I learned:
The 'while loop', by using loop in JavaScript, we can run the same code multiple times.

Task:
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
*/

// Setup
const myArray = [];
// Only change code below this line
let i = 5;
while (i >= 0)
{
  myArray.push(i);
  i--;
}