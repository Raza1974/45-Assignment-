#! /usr/bin/evn node
/*
21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
// Define types for the items
interface Item {
    name: string;
    category: string;
    quantity: number;
  }
  
  // Create objects containing different items
  const item1: Item = {
    name: "Apples",
    category: "Fruit",
    quantity: 10
  };
  
  const item2: Item = {
    name: "Milk",
    category: "Dairy",
    quantity: 2
  };
  
  const item3: Item = {
    name: "Bread",
    category: "Bakery",
    quantity: 1
  };
  
  // Print out the objects
  console.log("Item 1:", item1);
  console.log("Item 2:", item2);
  console.log("Item 3:", item3);
  