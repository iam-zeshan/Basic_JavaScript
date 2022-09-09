/*
I learned:
We can find out the remainder in javaScript just by using %.

For Example:
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)

we use this to find wheather the number is even or odd. i.e 
dividing a number by 2.
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)

Note: it does not work perfectly with negative numbers.

Task:
Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
*/

const remainder = 11%3;
console.log(remainder);