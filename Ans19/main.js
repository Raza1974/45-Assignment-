#! /usr/bin/env node
function countDinnerGuests(people) {
    const numGuests = people.length;
    console.log(`You are inviting ${numGuests} people to dinner.`);
}
const guests = [
    { name: "Asim" },
    { name: "Faheem" },
    { name: "Azeem" }
];
countDinnerGuests(guests);
console.log(guests);
export {};
