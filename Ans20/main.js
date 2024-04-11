#! /usr/bin/env node
/*
20. Think of something you could store in a array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.
*/
// Define an array of mountains
let mountains = ["Mount Everest", "K2", "Kgchenjunga", "Lhotse", "Makalu"];
// Print the list of mountains
console.log("List of mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
});
export {};
