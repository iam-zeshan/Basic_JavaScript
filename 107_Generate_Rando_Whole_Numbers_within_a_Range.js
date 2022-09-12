/*
I learned:
The range, I mean we can generate the random values in a specific range.

Task:
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

*/

function randomRange(myMin, myMax) {
    // Only change code below this line
    let rangeVal = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return rangeVal;
    // Only change code above this line
  }