/*
I learned:
We can check for the property in the Object by using '.hasOwnProperty(prpername)', if it was exists in the object then, it will return 'true' otherwise it will return 'false'. 

Task:
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
  if ( obj.hasOwnProperty(checkProp) )
  {
    return obj[checkProp];
  }else{
    return "Not Found";
  }
    // Only change code above this line
  }