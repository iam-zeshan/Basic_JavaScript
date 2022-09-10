/*
I learned:
'switch', statement, we can select from many options with the use of switch statement.

For Example:
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.


Task:
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val)
    {
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
    }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);