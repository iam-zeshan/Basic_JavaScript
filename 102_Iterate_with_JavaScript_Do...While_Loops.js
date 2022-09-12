/*
I learned:
'Do While'. loop, it works same as other one, in this loop the code executs and then the condition is checked.
The main difference is that in 'do while' loop, we can run the code inside in brackets atleast once no matter if the condition was wrong in the end.

Task:
Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
*/

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 5)