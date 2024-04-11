#! /usr/bin/env node
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Tests for equality and inequality with strings
Tests using the lower case function
Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
Tests using "and" and "or" operators
Test whether an item is in a array
Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
let string1 = "hello";
let string2 = "world";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true
// Tests using the lower case function
let str1 = "Hello";
let str2 = "hello";
console.log(str1.toLowerCase() === str2.toLowerCase()); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
let x = 10;
let y = 5;
let z = 15;
console.log((x > y) && (x < z)); // true
console.log((x > y) || (x > z)); // true
export {};
