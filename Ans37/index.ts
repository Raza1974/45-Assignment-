#! /usr/bin/env node

/*
function make_shirt(size: string, message: string): void {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}

// Call the function
make_shirt("medium", "Hello, World!");
*/
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt("medium");

// Call the function to make a shirt of any size with a different message
make_shirt("small", "Hello, World!");


