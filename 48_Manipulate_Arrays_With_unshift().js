/*
I learned:
By using 'unshift()', we can add an element, Sub-Array to an Array at the beggining, it works same as push(). but push() add items at the last and unshift() add at the start of an Array.

For Example:
const ourArray = ["Zeshan", "J", "cat"];
ourArray.shift();
ourArray.unshift("Ali");
After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Ali", "J", "cat"].


Task:
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);