#! /usr/bin/env node
"use strict";
/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

*/
let array = [1, 2, 3, 4, 5];
let index = 10; // Intentionally setting an index that is out of bounds
try {
    let element = array[index]; // Accessing an element with an out-of-bounds index
    console.log("Element at index", index, ":", element);
}
catch (error) {
    console.log("error:, error.message");
}
// Correcting the error by checking if the index is within bounds
if (index >= 0 && index < array.length) {
    let element = array[index];
    console.log("Element at index", index, ":", element);
}
else {
    console.error("Index out of bounds.");
}
