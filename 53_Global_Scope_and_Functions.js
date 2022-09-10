/*
I learned:
'Global scope' and the 'Local Scope' of variables in the JavaScript, Gloabal Scope mean when we declare the function outside of function then, it has a Global scope, we can use it any where in the code. 

Note: we should always use let and const during defining a variable other then it is automatically define as Global and it has some uninted consequences in the end.

Task:
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}