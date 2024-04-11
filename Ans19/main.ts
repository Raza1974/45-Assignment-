#! /usr/bin/env node

/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
indicating the number of people you are inviting to dinner.
*/
interface Person { name: string;}
 
function countDinnerGuests(people: Person[]): void {
const numGuests = people.length;
console.log(`You are inviting ${numGuests} people to dinner.`);
}
const guests: Person[] = [
{ name: "Asim" }, 
{ name: "Faheem" }, 
{ name: "Azeem" }
];
countDinnerGuests(guests);
console.log(guests);

