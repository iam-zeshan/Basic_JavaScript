/*
I learned:
It is possible that, we might declared a variables in both the ways like, with the Global and with the local scope with the 'same name' but the JavaScript will give precedence to the local one.

For Example:
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Task:
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
*/

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();