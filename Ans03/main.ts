#! /usr/bin/env node

/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and 
titlecase.
*/
const personName: string = "Raza Rizvi";
// lowerCase
console.log(personName.toLowerCase());
// upperCase
console.log(personName.toUpperCase());
// titlecase
let firstLetter: String = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);