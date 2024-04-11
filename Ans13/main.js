#! /usr/bin/env node
/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a
list that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”
*/
const mytrans = ["car", "motorcycle", "bicycle", "train"];
// Using a for loop
for (let i = 0; i <= 3; i++)
    console.log(`I would like to own a ${mytrans[i]}`);
export {};
