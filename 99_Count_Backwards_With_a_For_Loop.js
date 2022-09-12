/*
I learned:
The iteration in the backward counting, I mean, we can run our for loop by iterating it in from larg values to small.

Task:
Push the odd numbers from 9 through 1 to myArray using a for loop.


*/

// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i>=1; i-=2)
{
  myArray.push(i);
}