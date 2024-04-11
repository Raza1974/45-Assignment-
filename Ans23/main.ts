#! /use/bin/env node

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.includes('su')? I predict True.");
console.log(car.includes('su'));

console.log("Is car.includes('ford')? I predict False.");
console.log(car.includes('ford'));

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10);

console.log("Is car.charAt(0) === 's'? I predict True.");
console.log(car.charAt(0) === 's');

console.log("Is car.charAt(2) === 'b'? I predict True.");
console.log(car.charAt(2) === 'b');
