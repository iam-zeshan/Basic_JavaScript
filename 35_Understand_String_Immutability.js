/*
I learned:
The 'String immutability', it meanns that when we assing a string to a variable then, we can't alter that string but if we want to change the string of that variable then, we can assign it a new string i.e

For Example:
let myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

let myStr = "Bob";
myStr = "Job";

Task:
Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
*/

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line