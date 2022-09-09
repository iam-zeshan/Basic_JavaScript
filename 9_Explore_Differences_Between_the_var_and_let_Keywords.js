/*
I learned:
That, one of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:


For Example:
var camper = "Zeshan";
var camper = "Ali";
console.log(camper);
In the code above, the camper variable is originally declared as Zeshan, and is then overridden to be Ali. The console then displays the string Ali.

In a small application, we might not run into this type of problem. But as our codebase becomes larger, you might accidentally overwrite a variable that we did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

If we replace var with let in the code above, it results in an error:

let camper = "Zeshan";
let camper = "Haider";
The error can be seen in your browser console.

So unlike var, when you use let, a variable with the same name can only be declared once.

Task:
Update the code so it only uses the let keyword.
*/

let catName = "Oliver";
let catSound = "Meow!";