/*
I learned:
'const' variable and it has also an amazing features just like 'let' has.
Using const we can't change the value of that particulat variable. 

For Example:
const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

Task:
Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.
*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line