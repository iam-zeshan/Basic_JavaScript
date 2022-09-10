/*
I learned:
When the execution of the function is reached to the end then, it stop executing. If there ware more lines were stated below the return statement then these line will be ignored by function.

For Example:
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

Task:
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is the value that variable have at the beggining when it was declared.

*/

// Setup
function abTest(a, b) {
    // Only change code below this line
    let undefined;
    if(a <0 || b < 0)
    {
      return undefined;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);