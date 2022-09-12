/*
I learned:
The 'Nested For Loop', we can use Nested For loop, if we want to iterate or to access and to modify the multi-dimention array's value then, this will help us to do that.

Task:
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++)
    {
      for (let k = 0; k < arr[i].length; k++)
      {
          product *= arr[i][k];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);